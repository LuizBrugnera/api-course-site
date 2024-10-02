const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.post('/', viewController.createView);

router.get('/', viewController.getAllViews);

router.get('/:id', viewController.getViewById);

router.put('/:id', viewController.updateView);

router.delete('/:id', viewController.deleteView);

module.exports = router;
