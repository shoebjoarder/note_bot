var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
const HttpError = require("./model/http-error");
var cors = require("cors");
var http = require("http");
var debugLib = require("debug");

require("dotenv").config();

const env = process.env.NODE_ENV || "production";
const debug = debugLib("backend/server");

var app = express();

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/*
const io = socketIO(server);

io.on('connection', (socket) => {
  handleConnection(socket);
});
*/

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set Access-Control-Allow-Origin and other headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-with ,Content-Type ,Accept , Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");

  next();
});

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
// app.options("*", cors());

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies

//midellware , initial route filter of paths: ex, '/users','/notes'..
//import the routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// var fillRouter = require("./routes/fillDB");

var notesRouter = require("./routes/notes");
var coursesRouter = require("./routes/courses");
var sectionsRouter = require("./routes/sections");
var widgetsRouter = require("./routes/widgets");
var chatRouter = require("./routes/chat");
var chatbotRouter = require("./controllers/chatbotController");
//var socketHandlers = require("./controllers/socketHandlers");
app.use("/users", usersRouter);
app.use(require("./middleware/check-auth"));
app.use("/", indexRouter);
// app.use("/fill", fillRouter);
app.use("/notes", notesRouter);
app.use("/courses", coursesRouter);
app.use("/sections", sectionsRouter);
app.use("/widgets", widgetsRouter);
app.use("/chat", chatbotRouter); // Mount the chatbotController as a middleware
// app.use("/chat", chatRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

// error handler , if we have an error in the app , this will be executed
app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  // set locals, only providing error in development
  res.status(err.status || 500);
  res.json({ message: err.message || "An unkown error occured!" });
});

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Normalize a port into a number, string, or false
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

// Event listener for HTTP server "error" event
function onError(error) {
  if (error.syscall !== "listen") throw error;
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Starting " + env.trim() + " server on port " + port);
  debug("Listening on " + bind);
}

module.exports = app;
