import React from "react";
import storeItems from "../data/products.json";
import { Item } from "./Item";

export const ItemList = () => {
  const itemListStyle = {
    marginBottom: '6%', // Ajusta este valor según la altura de tu footer
  };

  return (
    <div className="items-list" style={itemListStyle}>
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
