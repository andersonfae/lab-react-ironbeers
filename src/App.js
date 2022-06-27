import "./App.css";

// import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { Beers } from "./components/Beers";

import { NewBeer } from "./components/NewBeer";

import { RandomBeer } from "./components/RandomBeer";

import { Homepage } from "./components/Homepage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
