const Router = require('express');
const commentController = require('../controllers/commentController');
const router = new Router();

router.get('/', commentController.getAll);
router.post('/', commentController.create);
router.post('/delete',commentController.delete);


module.exports = router;