import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useSnackbar } from "notistack";

const MainHome = () => {
 
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [carrito, setCarrito] = useState([]);

  const {enqueueSnackbar} = useSnackbar();
  

  // Recuperar el carrito del localStorage al montar el componente
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Obtener productos desde la API
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchProductos();
  }, []);

  // Actualizar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    // Evitar guardar un carrito vacío cuando la página recarga
    if (carrito.length > 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [carrito]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProductos = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const agregarCarrito = (producto, cantidad) => {
    console.log('Producto en agregarCarrito:', producto);
    console.log('Cantidad en agregarCarrito:', cantidad);
    const productoEnCarrito = carrito.find((item) => item.producto.id === producto.id);
    console.log('Producto en carrito:', productoEnCarrito);
    if (productoEnCarrito) {
      console.log('El producto existía en el carrito, así que se suman las cantidades');
      setCarrito(
        carrito.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      console.log('El producto no existía en el carrito, así que se adicionó al mismo');
      setCarrito([...carrito, { producto, cantidad }]);
      enqueueSnackbar('Se agrego el producto al carrito',{variant:'success'})
     
    }
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito(
      carrito.map((item) =>
        item.producto.id === id ? { ...item, cantidad } : item
      )
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.producto.id !== id));
  };

  const handlePago = async () => {
    try {
      console.log('Carrito a pagar:', carrito);
      await axios.post("http://localhost:3000/api/pago", {
        productos: carrito,
      });
      enqueueSnackbar('Pago procesado con éxito',{variant:'success'})
      localStorage.removeItem("carrito");
      setCarrito([]);
    } catch (error) {
      console.error("Error al procesar el pago", error);
      enqueueSnackbar('❌ Error al procesado el pago ',{variant:'error'})
    }
  };

  return (
    <div>
      <h1>MUNDO DIGITAL</h1>
      <div class="buscador">
      <label htmlFor="search">BUSCAR: </label
      >
      <input
        id="search"
        type="text"
        placeholder="Buscar productos..."
        onChange={handleSearch}
      />
      </div>
    
      <ProductList productos={filteredProductos} onAgregar={agregarCarrito} />
      <Cart
        carrito={carrito}
        onActualizarCantidad={actualizarCantidad}
        onEliminar={eliminarDelCarrito}
        onPagar={handlePago}
      />
    </div>
  );
};

export default MainHome;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CharacterCard from "./CharacterCard";
// const MainHome = () => {
//   const [contador, setContador] = useState(0);
//   const [productos, setProductos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [carrito, setCarrito] = useState([]);

//   useEffect(() => {
//     const fetchProductos = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/productos");
//         setProductos(response.data);
//       } catch (error) {
//         console.error("error al obtener los datos ", error);
//       }
//     };
//     fetchProductos();
//   }, []);

//   const handleSearch = (evento) => {
//     setSearchTerm(evento.target.value);
//   };

//   const filteredProductos = productos.filter(
//     (producto) =>
//       producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       producto.descripcion.includes(searchTerm.toLowerCase())
//   );

//   const agregarCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   };

//   const handlePago = async () => {
//     try {
//       await axios.post("http://localhost:3000/api/pago", {
//         productos: carrito,
//       });
//       alert("Pago procesado con exito");
//       setCarrito([]);
//     } catch (error) {
//       console.error("Error al procesar el pago", error);
//     }
//   };

//   return (
//     <div>
//       <h1>nos encontramos la bienvenida de nuestra pag</h1>
//       <h2> Contador: {contador}</h2>
//       <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//       <button onClick={() => setContador(contador - 1)}>Decrementar</button>
//       <button onClick={() => setContador(0)}>Reset</button>
//       <br />
//       <hr />
//       <br />
//       <label htmlFor="">Buscar: </label>
//       <input
//         type="text"
//         placeholder="Buscar productos..."
//         onChange={handleSearch}
//       />
//       <div>
//         {filteredProductos.map((producto) => (
//           <CharacterCard
//             key={producto.id}
//             img={producto.imagen}
//             nombre={producto.nombre}
//             descripcion={producto.descripcion}
//             precio={producto.precio}
//             stock={producto.stock}
//             onAgregar={() => agregarCarrito(producto)}
//           />
//         ))}
//       </div>

//       <br />
//       <hr />
//         <h2>Carrito de Compras</h2>
//         <ul>
//           {
//             carrito.map((producto,index)=>(
//               <li key={index}>{producto.nombre} - ${producto.precio}</li>
//             ))
//           }
//         </ul>
//          <button onClick={handlePago}>Pagar</button>
//       <hr />
//       <br />
//     </div>
//   );
// };

// export default MainHome;
