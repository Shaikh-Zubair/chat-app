module.exports = io => {
  io.on("connection", client => {
    console.log("a user connected");

    // this runs whenever the client sends something on the chat channel
    client.on("chat", data => {
      console.log("Message received -->", data);

      // this emits data back to all the users on the chat channel
      io.emit("chat", data);
    });
  });
};
