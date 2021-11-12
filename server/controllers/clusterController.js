const k8s = require('@kubernetes/client-node');

const clusterController = {};

clusterController.getNamespaces = async (req, res, next) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    res.locals.namespaces = await k8sApi.listNamespace();
    next();
  } catch (err) {
    return next({
      log: `clusterController.getNamespaces ERROR: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};

clusterController.getPods = async (req, res, next) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    res.locals.pods = await k8sApi.listNamespacedPod(req.params.namespace);
    next();
  } catch (err) {
    return next({
      log: `clusterController.getPods ERROR: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};

clusterController.getServices = async (req, res, next) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    res.locals.services = await k8sApi.listNamespacedService(
      req.params.namespace
    );
    next();
  } catch (err) {
    return next({
      log: `clusterController.getServices ERROR: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};

clusterController.getDeployments = async (req, res, next) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.AppsV1Api);

    res.locals.deployments = await k8sApi.listNamespacedDeployment(
      req.params.namespace
    );
    next();
  } catch (err) {
    return next({
      log: `clusterController.getDeployments ERROR: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};

clusterController.getIngresses = async (req, res, next) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.ExtensionsV1beta1Api);

    res.locals.ingresses = await k8sApi.listNamespacedIngress(
      req.params.namespace
    );
    next();
  } catch (err) {
    return next({
      log: `clusterController.getIngresses ERROR: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = clusterController;
