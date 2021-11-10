const clusterController = require('../controllers/clusterController');

const router = require('express').Router();

router.get('/pods', clusterController.getPods, (req, res) => {
  res.status(200).json(res.locals.pods);
});

router.get('/services', clusterController.getServices, (req, res) => {
  res.status(200).json(res.locals.services);
});

router.get('/deployments', clusterController.getDeployments, (req, res) => {
  res.status(200).json(res.locals.deployments);
});

router.get('/ingresses', clusterController.getIngresses, (req, res) => {
  res.status(200).json(res.locals.ingresses);
});

module.exports = router;
