const express = require("express");
const router = express.Router();

//Import the required controllers
const { login, signUp } = require("../controllers/Auth");
const { auth } = require("../middlewares/auth");

//route for user login
router.post("/login", login);
//route for signup
router.post("/signup", signUp);
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome boy",
  });
});

module.exports = router;
