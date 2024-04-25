import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-4 p-2 justify-center">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Header;
