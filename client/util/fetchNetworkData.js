import axios from 'axios';

async function fetchNetworkData() {
  const nodes = [];
  const edges = [];
  const nodeData = {};
  const serviceData = {};
  const namespaceResponse = await axios.get('/api/cluster/namespaces');
  const namespaces = namespaceResponse.data.body.items
    .map((ns) => [ns.metadata.name, ns.metadata.uid])
    .filter((namespace) => namespace.slice(0, 4) !== 'kube');
  for (const [namespace, namespaceUID] of namespaces) {
    nodes.push(namespaceUID);
    nodeData[namespaceUID] = {
      kind: 'namespace',
      name: namespace,
      uid: namespaceUID,
    };
    const podResponse = await axios.get(`/api/cluster/pods/${namespace}`);
    podResponse.data.body.items.forEach((pod) => {
      const {
        metadata: { name, uid, creationTimestamp: created, labels },
        spec: { containers: containerData },
        status: { phase: status, hostIP, podIP },
      } = pod;
      const containers = {};
      containerData.forEach((container) => {
        const { name, image } = container;
        containers[name] = { image };
      });
      nodes.push(uid);
      // edges.push({ from: namespaceUID, to: uid });
      nodeData[uid] = {
        kind: 'pod',
        name,
        uid,
        created,
        labels,
        containers,
        status,
        hostIP,
        podIP,
      };
    });
    const deploymentResponse = await axios.get(
      `/api/cluster/deployments/${namespace}`
    );
    deploymentResponse.data.body.items.forEach((deployment) => {
      const {
        metadata: { name, uid, creationTimestamp: created },
        spec: {
          selector: { matchLabels },
        },
        status: { replicas, availableReplicas },
      } = deployment;
      Object.values(nodeData).forEach((node) => {
        if (
          node.kind === 'pod' &&
          Object.entries(matchLabels).some(
            ([label, value]) => node.labels[label] === value
          )
        ) {
          edges.push({ from: uid, to: node.uid });
        }
      });
      nodes.push(uid);
      edges.push({ from: namespaceUID, to: uid });
      nodeData[uid] = {
        kind: 'deployment',
        name,
        uid,
        created,
        replicas: `${availableReplicas} / ${replicas}`,
      };
    });
    const serviceResponse = await axios.get(
      `/api/cluster/services/${namespace}`
    );
    serviceResponse.data.body.items.forEach((service) => {
      const {
        metadata: { name, uid, creationTimestamp: created },
        spec: { ports, selector, clusterIP, type },
      } = service;
      if (selector) {
        Object.values(nodeData).forEach((node) => {
          if (
            node.kind === 'pod' &&
            Object.entries(selector).some(
              ([label, value]) => node.labels[label] === value
            )
          ) {
            edges.push({ from: uid, to: node.uid });
          }
        });
      }
      serviceData[name] = uid;
      nodes.push(uid);
      edges.push({ from: namespaceUID, to: uid });
      nodeData[uid] = {
        kind: 'service',
        name,
        uid,
        created,
        type,
        clusterIP,
        ports,
      };
    });
    const ingressResponse = await axios.get(
      `/api/cluster/ingresses/${namespace}`
    );
    ingressResponse.data.body.items.forEach((ingress) => {
      const {
        metadata: { name, uid, creationTimestamp: created },
        spec: { ingressClassName: className, rules: ruleData },
      } = ingress;

      const rules = {};
      ruleData.forEach((rule) => {
        rules[rule.host] = {};
        rule.http.paths.forEach((pathData) => {
          const {
            backend: { serviceName, servicePort },
            path,
            pathType,
          } = pathData;
          edges.push({ from: uid, to: serviceData[serviceName] });
          rules[rule.host][path] = { pathType, serviceName, servicePort };
        });
      });

      nodes.push(uid);
      nodeData[uid] = {
        kind: 'ingress',
        name,
        uid,
        created,
        className,
        rules,
      };
    });
  }
  return { nodes, edges, nodeData };
}

export default fetchNetworkData;
