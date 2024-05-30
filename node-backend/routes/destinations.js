const express = require('express') ;
const router = express.Router();
const path = require('path');
const controller = require('../controllers/destinationController');


router.route('/')
    .get(controller.getAllDestinations)
    .post(controller.createNewDestination);
    

router.route('/:name')
    .get(controller.getDestination)
    .put(controller.updateDestination)
    .delete(controller.deleteDestination);


module.exports = router;