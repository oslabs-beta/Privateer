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

  const imgMap = {
    Ingress: ingressImg,
    Service: serviceImg,
    Pod: podImg,
  };

  const makeNode = (label, id) => {
    return {
      id: id,
      font: {
        color: 'white',
        size: 22,
        face: 'robato',
        strokeWidth: 3,
        strokeColor: 'black',
      },
      label: label,
      shape: 'image',
      shapeProperties: {
        useImageSize: true,
      },
      shadow: {
        enabled: true,
      },
      image: imgMap[label],
    };
  };

  const nodeList = [
    'Ingress',
    'Service',
    'Service',
    'Pod',
    'Pod',
    'Pod',
    'Pod',
    'Pod',
    'Ingress',
    'Service',
    'Pod',
  ];
  const [state, setState] = useState({
    graph: {
      nodes: nodeList.map((node, i) => makeNode(node, i)),
      edges: [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 2, to: 6 },
        { from: 2, to: 7 },
        { from: 8, to: 9 },
        { from: 9, to: 10 },
      ],
    },
    events: {
      click: ({ nodes, pointer: { DOM } }) => {
        if (nodes.length)
          setState((state) => ({ ...state, pointer: DOM, open: true }));
      },
    },
    open: false,
    pointer: {
      x: 0,
      y: 0,
    },
  });
  const { graph, events, open, pointer } = state;
  console.log(open);
  return (
    <>
      <NetworkModal
        data={{}}
        open={open}
        pointer={pointer}
        setClosed={() => setState((state) => ({ ...state, open: false }))}
      />
      <Graph
        graph={graph}
        options={options}
        events={events}
        // style={{ height: '100%' }}
      />
    </>
  );
};

export default MonitorGraph;
