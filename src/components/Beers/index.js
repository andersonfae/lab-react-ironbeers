import { Navbar } from "../Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function LongBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log(response);
        setBeers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    LongBeer();
  }, []);
  return (
    <>
      <Navbar />
      {beers.map((beer) => (
        <>
          <img className="ImgBeer" src={beer.image_url}></img>
          <Link to={`/beers/${beer._id}`}>
            <h2>{beer.name}</h2>
          </Link>
          <h3>{beer.tagline}</h3>
          <p>{beer.contributed_by}</p>
        </>
      ))}
    </>
  );
}
