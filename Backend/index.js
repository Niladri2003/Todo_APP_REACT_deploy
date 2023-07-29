//instansiate server
const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/database");
const cookieParser = require("cookie-parser");

//load config from env file

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
//connect to the database

dbConnect();

app.use(express.json());
app.use(cookieParser());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
const UserRoutes = require("./routes/User");

//mount the todo API routes
app.use("/api/v1", todoRoutes);
app.use("/api/v1/auth", UserRoutes);

app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://localhost:3000",
    "https://todo-app-react-deploy-beta.vercel.app/",
    "https://todo-app-react-deploy-beta.vercel.app",
    "https://todo-app-react-deploy-git-main-niladri2003.vercel.app/",
    "https://todo-app-react-deploy-git-main-niladri2003.vercel.app",
    "https://todo-app-react-deploy-lxrswy4kq-niladri2003.vercel.app/",
    "https://todo-app-react-deploy-lxrswy4kq-niladri2003.vercel.app",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
console.log("NEw Backend");
//

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
