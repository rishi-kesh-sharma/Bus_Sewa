const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const ejs = require("ejs");
const errorMiddlware = require("./server/middleware/error.js");

const authRouter = require("./server/routes/apiRoutes/authRoutes");
const userRouter = require("./server/routes/apiRoutes/userRoutes.js");
const contactRouter = require("./server/routes/apiRoutes/contactRoutes");
const bookingRouter = require("./server/routes/apiRoutes/bookingRoutes");
const busRouter = require("./server/routes/apiRoutes/busRoutes");
const adminRouter = require("./server/routes/apiRoutes/adminRoutes");
const renderRouter = require("./server/routes/renderRoutes/general");

const adminDashBoardRenderRouter = require("./server/routes/renderRoutes/dashboard");
const {
  isAuthenticatedUser,
  authorizeRoles,
  isAuthorizedUser,
} = require("./server/middleware/auth.js");
// handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the sever due to uncaught exception `);
  process.exit(1);
});

const app = express();

//ERROR MIDDLEWARE
app.use(errorMiddlware);

//CONFIGURE DOTENV
dotenv.config({ path: "./config.env" });
//static files

// moment configuration

var moment = require("moment");
var shortDateFormat = "ddd @ h:mmA";
app.locals.moment = moment;
app.locals.shortDateFormat = shortDateFormat;

// using static files
const staticPath = path.join(__dirname, "./static");
app.use(express.static(staticPath));

//view engine

app.set("view engine", "ejs");

//parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

//   express json middleware
app.use(express.json());

// cors

app.use(cors());
app.use(cookieParser());

//database connection
require("./server/database/conn");

// auth middleware isAuthenticatedUser

//all the routes

app.use("/api/user", isAuthenticatedUser, userRouter);
app.use("/api/auth", authRouter);
app.use("/api/booking", isAuthenticatedUser, bookingRouter);
app.use("/api/bus", busRouter);
app.use("/api/contact", isAuthenticatedUser, contactRouter);
app.use("/api/admin", isAuthenticatedUser, adminRouter);

app.use(
  "/dashboard",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  adminDashBoardRenderRouter
);

// use render routes

app.use(renderRouter);

//listening to the server

// action routes

app.listen(process.env.PORT, () => {
  console.log("server running in port " + process.env.PORT);
});

// handling unhandled rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the sever due to unhandled promise  rejection `);
  app.close(() => {
    process.exit(1);
  });
});
