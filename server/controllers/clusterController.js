const k8s = require('@kubernetes/client-node');

const clusterController = {};

clusterController.getPods = async (req, res, next) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    res.locals.pods = await k8sApi.listNamespacedPod('default');
    next();
  } catch (err) {
    return next({
      log: `clusterController.getPods ERROR: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = clusterController;
