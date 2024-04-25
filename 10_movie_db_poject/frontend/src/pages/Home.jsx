import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
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

  return (
    <>
      <Header />
      <section className="flex flex-wrap gap-9 justify-center p-20">
        {moviesData?.map((movie, index) => (
          <Link to={movie._id} key={index} className="flex items-center justify-center flex-col w-40 h-40 text-center">
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </Link>
        ))}
      </section>
      <footer className="pb-20">
        <div className="flex justify-center gap-10">
          <button disabled={page === 1} onClick={() => changePage("previous")}>
            Previous
          </button>
          <button disabled={lastPage === true} onClick={() => changePage("next")}>
            Next
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
