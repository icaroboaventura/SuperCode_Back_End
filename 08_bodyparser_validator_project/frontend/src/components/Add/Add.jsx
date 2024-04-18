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
      .then((data) => {
        setMessage(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="flex flex-col items-center gap-4 my-12">
      <input className="border-2 border-yellow-700 pl-4 p-1.5 rounded-full placeholder:text-yellow-500 outline-yellow-700 text-yellow-700" type="text" placeholder="First Name" value={newMessage.firstname} onChange={(e) => setNewMessage({ ...newMessage, firstname: e.target.value })} required />
      <input className="border-2 border-yellow-700 pl-4 p-1.5 rounded-full placeholder:text-yellow-500 outline-yellow-700 text-yellow-700" type="text" placeholder="Last Name" value={newMessage.lastname} onChange={(e) => setNewMessage({ ...newMessage, lastname: e.target.value })} required />
      <input className="border-2 border-yellow-700 pl-4 p-1.5 rounded-full placeholder:text-yellow-500 outline-yellow-700 text-yellow-700" type="text" placeholder="Email" value={newMessage.email} onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })} required />
      <input className="border-2 border-yellow-700 pl-4 p-1.5 rounded-full placeholder:text-yellow-500 outline-yellow-700 text-yellow-700" type="text" placeholder="Message" value={newMessage.message} onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })} required />
      <button className="bg-yellow-700 border-2 border-yellow-500 py-2 px-8 rounded-full text-yellow-500" onClick={addMessage}>
        Send
      </button>
    </form>
  );
};

export default Add;
