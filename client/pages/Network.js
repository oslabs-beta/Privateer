import Graph from 'react-graph-vis';
import React, { useState } from 'react';
import podImg from '../assets/k8_icons/pod-128.png';
import serviceImg from '../assets/k8_icons/svc-128.png';
import ingressImg from '../assets/k8_icons/ing-128.png';
import NetworkModal from '../components/network/NetworkModal';

const options = {
  autoResize: true,
  layout: {
    improvedLayout: true,
    hierarchical: {
      enabled: true,
      direction: 'LR',
      sortMethod: 'directed',
      levelSeparation: 200,
    },
  },
  edges: {
    color: '#ffffff',
    width: 6,
    shadow: {
      enabled: true,
    },
    smooth: {
      type: 'discrete',
      forceDirection: 'vertical',
      roundness: 0.8,
    },
  },
  interaction: {
    dragNodes: false,
    dragView: true,
  },
  physics: {
    enabled: true,
    stabilization: {
      enabled: true,
    },
    hierarchicalRepulsion: {
      nodeDistance: 180,
    },
  },
};

const MonitorGraph = () => {
  const createNode = (x, y, origin) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const from = origin;
      return {
        graph: {
          nodes: [...nodes, { id, label: `Node ${id}`, color, x, y }],
          edges: [...edges, { from, to: id }],
        },
        counter: id,
        ...rest,
      };
    });
  };

  //maps Kubernetes object icons to object kind
  const imgMap = {
    ingress: ingressImg,
    service: serviceImg,
    pod: podImg,
  };

  //uses Kubernetes object data to creates vis.js node objects with styling
  const makeNode = (data, id) => {
    return {
      id: id,
      font: {
        color: 'white',
        size: 22,
        face: 'robato',
        strokeWidth: 3,
        strokeColor: 'black',
      },
      label: data.name,
      shape: 'image',
      shapeProperties: {
        useImageSize: true,
      },
      shadow: {
        enabled: true,
      },
      image: imgMap[data.type],
    };
  };

  //mockup data
  const nodeList = [
    {
      type: 'ingress',
      name: 'https://foo.example.com',
    },
    {
      type: 'ingress',
      name: 'https://bar.example.com',
    },
    {
      type: 'service',
      name: 'cluster_IP',
      IP: '10.1.1.7',
      port: 8080,
      targetPort: 8080,
    },
    {
      type: 'service',
      name: 'cluster_IP',
      port: 8080,
      targetPort: 8080,
    },
    {
      type: 'service',
      name: 'cluster_IP',
      port: 8080,
      targetPort: 8080,
    },
    {
      type: 'pod',
      status: 'OK',
      name: 'POST_1',
      containers: 'post',
      hostIP: '10.1.1.7',
      podIP: '192.168.1.2',
      volume: 'VOL_1',
    },
    {
      type: 'pod',
      status: 'ERROR',
      name: 'POST_2',
      containers: 'post',
      hostIP: '10.1.1.8',
      podIP: '192.168.1.2',
      volume: 'VOL_1',
    },
    {
      type: 'pod',
      status: 'OK',
      name: 'POST_3',
      containers: 'post',
      hostIP: '10.1.1.7',
      podIP: '192.168.1.3',
      volume: 'VOL_1',
    },
    {
      type: 'pod',
      status: 'OK',
      name: 'COMMENT_1',
      containers: 'comment',
      hostIP: '10.1.1.8',
      podIP: '192.168.1.3',
      volume: 'VOL_2',
    },
    {
      type: 'pod',
      status: 'OK',
      name: 'COMMENT_2',
      containers: 'comment',
      hostIP: '10.1.1.8',
      podIP: '192.168.1.4',
      volume: 'VOL_2',
    },
    {
      type: 'pod',
      status: 'OK',
      name: 'MODERATION_1',
      containers: 'moderation',
      hostIP: '10.1.1.9',
      podIP: '192.168.1.4',
      volume: 'VOL_2',
    },
  ];

  //mockup data
  const edgeList = [
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
    { from: 2, to: 7 },
    { from: 3, to: 8 },
    { from: 3, to: 9 },
    { from: 4, to: 10 },
  ];

  const [state, setState] = useState({
    graph: {
      nodes: nodeList.map((node, i) => makeNode(node, i)),
      edges: edgeList,
    },
    events: {
      //if user clicks a node, open modal and store node id and pointer location in state
      click: ({ nodes, pointer: { DOM } }) => {
        if (nodes.length)
          setState((state) => ({
            ...state,
            selected: nodeList[nodes[0]],
            pointer: DOM,
            open: true,
          }));
      },
    },
    open: false,
    pointer: {
      x: 0,
      y: 0,
    },
    selected: null,
  });

  const { graph, events, selected, open, pointer } = state;
  return (
    <>
      <NetworkModal
        data={selected}
        open={open}
        pointer={pointer}
        setClosed={() => setState((state) => ({ ...state, open: false }))}
      />
      <Graph graph={graph} options={options} events={events} />
    </>
  );
};

export default MonitorGraph;
