const express = require("express");
const router = express.Router();
const tripsCtrl = require("../../controllers/api/trips");

router.get("/", tripsCtrl.index);
router.get("/:id", tripsCtrl.show);
router.post("/", tripsCtrl.create);
router.delete("/:id", tripsCtrl.delete);
router.put("/:id", tripsCtrl.update);

module.exports = router;