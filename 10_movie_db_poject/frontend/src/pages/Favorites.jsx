import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <Header />
      <section className="flex flex-wrap gap-9 justify-center p-20">
        {favData.map((movie, index) => (
          <Link to={movie._id} key={index} className="flex items-center justify-center flex-col w-40 h-40 text-center">
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Favorites;
