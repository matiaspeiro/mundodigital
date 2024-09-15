import React from "react";
import CharacterCard from "./CharacterCard";

const ProductList = ({ productos, onAgregar }) => {
  return (
    <div>
      {productos.map((producto) => (
        <CharacterCard
          key={producto.id}
          producto={producto}
          onAgregar={onAgregar}
        />
      ))}
    </div>
  );
};

export default ProductList;
