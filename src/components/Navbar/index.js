import Home from "../../assets/home-beer.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to={"/"}>
        <img src={Home} alt="Img Beers" />
      </Link>
    </>
  );
}
