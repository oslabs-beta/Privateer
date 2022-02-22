const GRAPH_OPTIONS = {
  autoResize: true,
  layout: {
    improvedLayout: true,
    hierarchical: {
      enabled: true,
      direction: 'UD',
      sortMethod: 'directed',
      levelSeparation: 280,
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
      nodeDistance: 280,
    },
  },
};

export default GRAPH_OPTIONS;
