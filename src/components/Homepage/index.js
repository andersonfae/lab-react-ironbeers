import { Link } from "react-router-dom";
import RandomBeerImg from "../../assets/random-beer.png";
import NewBeerImg from "../../assets/new-beer.png";
import imgBeers from "../../assets/beers.png";

export function Homepage() {
  return (
    <>
      <div>
        <Link to={`/beers`}>
          {" "}
          <img src={imgBeers} alt="beer" />
        </Link>
        <h2>All beer</h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </h5>
        <Link to={`/random-beer`}>
          <img src={NewBeerImg} alt="beer" />
        </Link>
        <h2>Random</h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </h5>
        <Link to={`/new-beer`}>
          <img src={RandomBeerImg} alt="beer" />
        </Link>
        <h2>Add Beer</h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </h5>
      </div>
    </>
  );
}
