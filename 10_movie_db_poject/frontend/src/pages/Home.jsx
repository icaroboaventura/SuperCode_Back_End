import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";

const Home = () => {
  const [moviesData, setMoviesData] = useState();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/v1/movies?page=${page}`);
        const data = await res.json();
        if (data.length === 0) {
          setLastPage(true);
          setPage(page - 1);
        }
        setMoviesData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const changePage = (type) => {
    switch (type) {
      case "previous":
        if (page === 1) return setPage(1);
        setPage(page - 1);
        setLastPage(false);
        break;
      case "next":
        setPage(page + 1);
        break;
    }
  };

  console.log(moviesData);
  console.log(page);
  console.log(lastPage);

  return (
    <>
      <footer>
        <button disabled={page === 1} onClick={() => changePage("previous")}>
          Previous
        </button>
        <button disabled={lastPage === true} onClick={() => changePage("next")}>
          Next
        </button>
      </footer>
      <h1>Home</h1>
      {moviesData?.map((movie, index) => (
        <div key={index}>
          <img className=" w-100" src={movie.poster} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
