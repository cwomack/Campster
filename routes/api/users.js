const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

/*---------- Public Routes ----------*/
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);
// router.get("/users/:id", usersCtrl.show);



/*---------- Protected Routes ----------*/


module.exports = router;