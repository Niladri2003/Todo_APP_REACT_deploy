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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://todo-app-react-deploy-beta.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,token');
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// app.use(function(req, res, next) { //allow cross origin requests
//   res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });


//mount the todo API routes
app.use("/api/v1", todoRoutes);
app.use("/api/v1/auth", UserRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
