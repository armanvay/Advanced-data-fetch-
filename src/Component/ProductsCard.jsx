import React from 'react';

const ProductsCard = ({ product }) => {
    const { id, name, description, price, brand }=product
  return (
    <div className="card card-border bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>{brand}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price} Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;