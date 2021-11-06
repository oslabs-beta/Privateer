const clusterController = require('../controllers/clusterController');

const router = require('express').Router();

router.get('/pods', clusterController.getPods, (req, res) => {
  res.status(200).json(res.locals.pods);
});


module.exports = router;
