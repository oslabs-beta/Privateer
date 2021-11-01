import Graph from 'react-graph-vis';
import React, { useState } from 'react';
import podImg from '../assets/k8_icons/pod-128.png';
import serviceImg from '../assets/k8_icons/svc-128.png';
import ingressImg from '../assets/k8_icons/ing-128.png';
import NetworkModal from '../components/network/NetworkModal';
import options from '../constants/graphOptions';
import { edgeList, nodeList } from '../assets/mockups/networkData';

const MonitorGraph = () => {
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
            selectedNode: nodeList[nodes[0]],
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

  const { graph, events, selectedNode, modalOpen, pointerLocation } = state;
  const { name: nodeName, ...nodeData } = selectedNode;
  return (
    <>
      <NetworkModal
        nodeName={nodeName}
        nodeData={nodeData}
        modalOpen={modalOpen}
        pointerLocation={pointerLocation}
        setClosed={() => setState((state) => ({ ...state, modalOpen: false }))}
      />
      <Graph graph={graph} options={options} events={events} />
    </>
  );
};

export default MonitorGraph;
