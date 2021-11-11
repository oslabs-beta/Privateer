import Graph from 'react-graph-vis';
import React, { useState, useEffect } from 'react';
import podImg from '../assets/k8_icons/pod-128.png';
import serviceImg from '../assets/k8_icons/svc-128.png';
import ingressImg from '../assets/k8_icons/ing-128.png';
import deploymentImg from '../assets/k8_icons/deploy-128.png';
import NetworkModal from '../components/network/NetworkModal';
import fetchNetworkData from '../util/fetchNetworkData';
import options from '../constants/graphOptions';
import { Container } from '@mui/material';

const MonitorGraph = () => {
  //maps Kubernetes object icons to object kind
  const imgMap = {
    ingress: ingressImg,
    service: serviceImg,
    pod: podImg,
    deployment: deploymentImg,
  };

  //uses Kubernetes object data to creates vis.js node objects with styling
  const makeNode = (data) => {
    return {
      id: data.uid,
      font: {
        color: 'black',
        size: 22,
        face: 'robato',
        strokeWidth: 3,
        strokeColor: 'white',
      },
      label: data.name,
      shape: 'image',
      shapeProperties: {
        useImageSize: true,
      },
      shadow: {
        enabled: true,
      },
      image: imgMap[data.kind],
    };
  };

  const [state, setState] = useState({
    graph: {
      nodes: [],
      edges: [],
    },
    nodeData: {},
    events: {
      //if user clicks a node, open modal and store node id and pointer location in state
      click: ({ nodes, pointer: { DOM } }) => {
        if (nodes.length)
          setState((state) => ({
            ...state,
            selectedNode: state.nodeData[nodes[0]],
            pointerLocation: DOM,
            modalOpen: true,
          }));
      },
    },
    modalOpen: false,
    pointerLocation: {
      x: 0,
      y: 0,
    },
    selectedNode: { name: null },
  });

  useEffect(async () => {
<<<<<<< HEAD
    const nodes = [];
    const edges = [];
    const nodeData = {};
    const serviceData = {};
    const podResponse = await axios.get('/api/cluster/pods');
    podResponse.data.body.items.map((pod) => {
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
    const deploymentResponse = await axios.get('/api/cluster/deployments');
    deploymentResponse.data.body.items.map((deployment) => {
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
        )
          edges.push({ from: uid, to: node.uid });
      });
      nodes.push(uid);
      nodeData[uid] = {
        kind: 'deployment',
        name,
        uid,
        created,
        replicas: `${availableReplicas} / ${replicas}`,
      };
    });
    const serviceResponse = await axios.get('/api/cluster/services');
    serviceResponse.data.body.items.map((service) => {
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
          )
            edges.push({ from: uid, to: node.uid });
        });
      }
      serviceData[name] = uid;
      nodes.push(uid);
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
    const ingressResponse = await axios.get('/api/cluster/ingresses');
    ingressResponse.data.body.items.map((ingress) => {
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
=======
    const { nodes, edges, nodeData } = await fetchNetworkData();
>>>>>>> 54b4eb2cf2a6e1bb36c0b8d115b9a05d8c19842d
    setState({
      ...state,
      nodeData,
      graph: { nodes: nodes.map((uid) => makeNode(nodeData[uid])), edges },
    });
  }, []);

  const { graph, events, selectedNode, modalOpen, pointerLocation } = state;
  const { name: nodeName, ...nodeData } = selectedNode;
  return (
    <Container maxWidth="true" title="network-container">
      <NetworkModal
        nodeName={nodeName}
        nodeData={nodeData}
        modalOpen={modalOpen}
        pointerLocation={pointerLocation}
        setClosed={() => setState((state) => ({ ...state, modalOpen: false }))}
      />
      <Graph graph={graph} options={options} events={events} />
    </Container>
  );
};

export default MonitorGraph;
