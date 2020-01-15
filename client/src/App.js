import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import Login from "./components/login";
import Header from "./components/header";
import ChatModule from "./components/chatModule";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ChatModule />
      </div>
    </div>
  );
}

export default App;
