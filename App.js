import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const WEBSOCKET_URL = "wss://echo.websocket.events"; // public echo server

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(WEBSOCKET_URL);

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, { text: event.data, from: "server" }]);
    };

    ws.current.onopen = () => console.log("WebSocket connected.");
    ws.current.onclose = () => console.log("WebSocket disconnected.");

    return () => ws.current.close();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input);
      setMessages((prev) => [...prev, { text: input, from: "me" }]);
      setInput('');
    }
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>
        <div className="input-box">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
