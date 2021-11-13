const router = require('express').Router();
const clusterController = require('../controllers/clusterController');

router.get('/namespaces', clusterController.getNamespaces, (req, res) => {
  res.status(200).json(res.locals.namespaces);
});

router.get('/pods', clusterController.getPods, (req, res) => {
  res.status(200).json(res.locals.pods);
});

router.get('/pods/:namespace', clusterController.getPods, (req, res) => {
  res.status(200).json(res.locals.pods);
});

router.get(
  '/services/:namespace',
  clusterController.getServices,
  (req, res) => {
    res.status(200).json(res.locals.services);
  }
);

router.get(
  '/deployments/:namespace',
  clusterController.getDeployments,
  (req, res) => {
    res.status(200).json(res.locals.deployments);
  }
);

router.get(
  '/ingresses/:namespace',
  clusterController.getIngresses,
  (req, res) => {
    res.status(200).json(res.locals.ingresses);
  }
);

module.exports = router;
