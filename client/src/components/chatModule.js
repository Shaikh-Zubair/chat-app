import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import InputMessage from "./inputMessage";
import ChatArea from "./chatArea";

const ChatModule = () => {
  const [newMessage, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  // Establish a WS connection with the server
  const socket = openSocket("/");

  const deleteMessage = index => {
    const messages = [...allMessages];
    messages.splice(index, 1);
    setAllMessages(messages);
  };

  const sendMessage = () => {
    console.log("SENT");

    // it emits the new message written by the user to the 'chat' channel
    socket.emit("chat", newMessage);

    // clear the message from the text input after sending
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", data => {
      console.log("message", data);
      let messages = allMessages;
      messages.push(data);
      messages = [...messages];
      console.log(messages);
      setAllMessages(messages);
    });
  }, []);

  return (
    <div>
      <h2>Chat Messages</h2>
      <div style={{ height: "65vh", overflowY: "auto" }}>
        {/* This is where we will be displaying all the messages */}
        <ChatArea allMessages={allMessages} deleteMessage={deleteMessage} />
      </div>
      <InputMessage
        onChange={e => setMessage(e.target.value)}
        placeholder="type your message .."
        value={newMessage}
        onClick={() => sendMessage()}
      />
    </div>
  );
};

export default ChatModule;
