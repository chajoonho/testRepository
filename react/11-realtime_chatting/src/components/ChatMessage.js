import React from "react";
import tempImg from "../assets/asd.jpg";

function ChatMessage({ message, auth }) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth?.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
