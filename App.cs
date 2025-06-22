.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #914343;
}

.chat-box {
  width: 100%;
  max-width: 480px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background: rgb(112, 147, 132);
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  max-width: 75%;
}

.message.me {
  background-color: #daf1fc;
  align-self: flex-end;
}

.message.server {
  background-color: #eaeaea;
  align-self: flex-start;
}

.input-box {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.input-box input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.input-box button {
  margin-left: 10px;
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
}
