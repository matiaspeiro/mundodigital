import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
const MainHome = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState("OOOO");
  const [species, setSpecies] = useState("OOOO");
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setPersonajes(response.data.results);
      })
      .then(() => {
        console.log(personajes);
      })
      .catch((error) => {
        console.error("error al obtener los datos ", error);
      });
  }, [contador]);

  return (
    <div>
      <h1>nos encontramos la bienvenida de nuestra pag</h1>
      <h2> Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reset</button>
      <br />
      <hr />
      <br />
      <div>
        {personajes.map(
            personaje =>(
              <CharacterCard img={personaje.image} nombre={personaje.name} status={personaje.status} species={personaje.species} />
            )
        )}
      </div>

      <br />
      <hr />
      <br />
    </div>
  );
};

export default MainHome;
