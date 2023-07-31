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

const cors = require("cors");
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://todo-app-react-deploy-beta.vercel.app/",
    "https://todo-app-react-deploy-beta.vercel.app",
    "https://todo-app-react-deploy-git-main-niladri2003.vercel.app/",
    "https://todo-app-react-deploy-git-main-niladri2003.vercel.app",
    "https://todo-app-react-deploy-lxrswy4kq-niladri2003.vercel.app/",
    "https://todo-app-react-deploy-lxrswy4kq-niladri2003.vercel.app",
  ],

  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
//

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
