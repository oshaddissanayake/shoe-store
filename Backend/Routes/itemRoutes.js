const express = require('express');
const itemController = require('../Controllers/item_controller');
const router = express.Router();

router.post("/createitem", itemController.CreateItem);
router.route("/getall").get(itemController.AllItems);
router.route("/update/:id").put(itemController.UpdateItem);
router.route("/delete/:id").delete(itemController.DeleteItem);

module.exports = router;