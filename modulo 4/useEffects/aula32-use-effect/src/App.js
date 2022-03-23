import React, {useState, useEffect} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard.js";
import "./styles.css";


function App (props) {

  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios 
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(res => {
        setPokeList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const changePokeName = e => {
    setPokeName(e.target.value);
  };


    return (
      <div className="App">
        <h1>PokeDex</h1>
        <select onChange={changePokeName}>
          <option value="">Select a Pokemon</option>
          {pokeList.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <div>
          {pokeName && <PokeCard pokemon={pokeName} />}
        </div>
      </div>
    );
}
export default App;