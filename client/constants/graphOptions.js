const options = {
  autoResize: true,
  layout: {
    improvedLayout: true,
    hierarchical: {
      enabled: true,
      direction: 'UD',
      sortMethod: 'directed',
      levelSeparation: 200,
      treeSpacing: 0,
    },
  },
  edges: {
    color: '#ffffff',
    width: 8,
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

export default options;
