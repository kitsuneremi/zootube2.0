const express = require('express');
const router = express.Router();

const videoController = require('../app/controllers/videoController');

router.get('/', videoController.getListVideo);

module.exports = router;
