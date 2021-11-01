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

export default options;
