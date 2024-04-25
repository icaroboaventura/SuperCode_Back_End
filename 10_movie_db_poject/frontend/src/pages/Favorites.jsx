import { useEffect, useState } from "react";

const Favorites = () => {
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4444/api/v1/favorites")
      .then((resp) => resp.json())
      .then((allFavos) => setFavData(allFavos))
      .catch((err) => console.error("Fehler in Favo-Fetch"));
  }, []);

  return (
    <section>
      <h2>Favorites</h2>
    </section>
  );
};

export default Favorites;
