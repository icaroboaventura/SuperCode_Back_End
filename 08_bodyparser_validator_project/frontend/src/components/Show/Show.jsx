import { useEffect } from "react";

const Show = ({ message, setMessage }) => {
  useEffect(() => {
    fetch("http://localhost:4004/api/v1/messages")
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, [message]);
  return (
    <>
      {message.map((i) => (
        <div>
          <h3>{`${i.firstname} ${i.lastname}`}</h3>
          <p>{i.message}</p>
        </div>
      ))}
    </>
  );
};

export default Show;
