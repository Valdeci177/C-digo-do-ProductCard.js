import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Preço: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
