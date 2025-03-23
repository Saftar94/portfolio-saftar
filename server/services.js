const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "../public"))); // Serve static files from the "public" directory

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

const findAvailablePort = async (startPort) => {
  const net = require('net');
  
  const isPortAvailable = (port) => {
    return new Promise((resolve) => {
      const server = net.createServer();
      
      server.once('error', () => {
        resolve(false);
      });
      
      server.once('listening', () => {
        server.close();
        resolve(true);
      });
      
      server.listen(port);
    });
  };

  let port = startPort;
  while (!(await isPortAvailable(port))) {
    port++;
  }
  return port;
};

const startServer = async () => {
  const port = await findAvailablePort(3000);
  http.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
  });
};

startServer();
