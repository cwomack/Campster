const express = require("express");
const router = express.Router();
const campsCtrl = require("../../controllers/api/camps");

router.get("/search", campsCtrl.searchCamps);

module.exports = router;