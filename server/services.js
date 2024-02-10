// const path = require("path");
// const express = require("express");
// const app = express();
// const http = require("http").createServer(app);
// const cors = require("cors");
// app.use(cors());

// const PORT = process.env.PORT || 3003;
// const { Server } = require("socket.io");

// const io = new Server(http, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// // let activeSessions = 0;

// // io.on("connection", (socket) => {
// //   activeSessions++;
// //   io.emit("activeSessions", activeSessions);

// //   socket.on("disconnect", () => {
// //     activeSessions--;
// //     io.emit("activeSessions", activeSessions);
// //   });
// // });
// io.on('connection', (socket) => {
//   console.log('User connected');

//   // Обработка событий чата
//   socket.on('message', (message) => {
//     io.emit('message', message);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// http.listen(PORT, () => {
//   console.log("Server is running on http://localhost:3003");
// });

// ==============================================

const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "../public"))); // Serve static files from the "public" directory

const PORT = process.env.PORT || 3005;
const { Server } = require("socket.io");

const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

let activeSessions = 0;

io.on("connection", (socket) => {
  socket.on("chat message", (message) => {
    io.emit("chat message", { text: message, sender: socket.id });
  });
  activeSessions++;
  io.emit("activeSessions", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessions", activeSessions);
  });
});

http.listen(PORT, () => {
  console.log("Server is running on http://localhost:3005");
});
