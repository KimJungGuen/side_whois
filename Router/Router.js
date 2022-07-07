const router = require('express').Router();
const DetailController = require('../Controller/DetailController');
const mainController = require('../Controller/MainController');

router.get('/', mainController.index);

router.get('/write', mainController.write);

router.post('/findWorld', mainController.findWorld);

router.post('/write', mainController.insert);
router.post('/write/detail', DetailController.insert);

module.exports = router;