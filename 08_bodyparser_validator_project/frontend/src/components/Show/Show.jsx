import { useEffect } from "react";

const Show = ({ message, setMessage }) => {
  useEffect(() => {
    fetch("http://localhost:4004/api/v1/messages")
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col mx-auto w-128 gap-3 px-4">
      {message.map((i) => (
        <div className="bg-yellow-500 border-2 border-yellow-700 py-2 px-8 rounded-full text-yellow-700">
          <h3>{`${i.firstname} ${i.lastname}:`}</h3>
          <p>{i.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Show;
