import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
const MainHome = () => {
  const [contador, setContador] = useState(0);
  const [productos, setProductos] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(()=>{
    const fetchProductos = async ()=>{
      try {
        const response = await axios.get("http://localhost:3000/api/productos");
        setProductos(response.data)
      } catch (error) {
        console.error("error al obtener los datos ", error);
      }
    }
    fetchProductos();
  },[])


    const handleSearch = (evento)=>{
        setSearchTerm(evento.target.value)
    } 

  const filteredProductos = productos.filter(
    (producto)=>  producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || producto.descripcion.includes(searchTerm.toLowerCase())
  )


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
      <label htmlFor="">Buscar: </label>
        <input type="text" placeholder="Buscar productos..."  onChange={handleSearch}/>
      <div>
        
        {filteredProductos.map(
          producto =>(
              <CharacterCard key={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock}/>
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
