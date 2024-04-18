import { useState } from "react";
import Add from "../../components/Add/Add";
import Show from "../../components/Show/Show";

const Home = () => {
  const [message, setMessage] = useState([]);

  return (
    <>
      <Add message={message} />
      <Show message={message} setMessage={setMessage} />
    </>
  );
};

export default Home;
