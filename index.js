const io = require("socket.io")(3000, { cors: { origin: "*" } });

io.on("connection", s => {
    s.on("message", m => s.broadcast.emit("message", m));
    s.on("typing", n => s.broadcast.emit("typing", n));
    s.on("setUser", u => s.broadcast.emit("setUser", u));
});
console.log("Server on 3000");