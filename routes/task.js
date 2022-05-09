const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.get("", taskController.get);
router.post("", taskController.post);
router.put("/:id", taskController.put);
router.delete("/:id", taskController.delete);

module.exports = router