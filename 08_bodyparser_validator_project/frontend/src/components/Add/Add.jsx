import { useState } from "react";

const Add = ({ setMessage }) => {
  const [newMessage, setNewMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const addMessage = (event) => {
    event.preventDefault();
    fetch("http://localhost:4004/api/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  };

  return (
    <form>
      <input type="text" placeholder="First Name" value={newMessage.firstname} onChange={(e) => setNewMessage({ ...newMessage, firstname: e.target.value })} required />
      <input type="text" placeholder="Last Name" value={newMessage.lastname} onChange={(e) => setNewMessage({ ...newMessage, lastname: e.target.value })} required />
      <input type="email" placeholder="Email" value={newMessage.email} onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })} required />
      <input type="text" placeholder="Message" value={newMessage.message} onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })} required />
      <button onClick={addMessage}>Send</button>
    </form>
  );
};

export default Add;
