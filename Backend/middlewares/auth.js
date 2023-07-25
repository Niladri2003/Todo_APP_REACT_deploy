const jwt = require("jsonwebtoken");
require("dotenv").config();

//auth
exports.auth = async (req, res, next) => {
  try {
    // console.log("token", req.cookies.token);
    console.log("cookie", req.cookies.token);
    console.log("body", req.body.token);
    console.log("header", req.header("Authorization"));

    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    //if token missing , then return response
    console.log("recived token at backend", token);
    if (!token || token === undefined) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }
    //verify token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (e) {
      //token verification issue
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } catch (e) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};
