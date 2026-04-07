import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, title, price, description, category, image } = product;

  // Limit the description to first 100 characters
  const shortDescription = description.length > 100 
    ? description.substring(0, 100) + '...' 
    : description;

  return (
    <div className="card h-100">
      <img  
        src={image} 
        className="card-img-top" 
        alt={title} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{category}</p>
        <p className="card-text flex-grow-1">{shortDescription}</p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 text-primary">${price}</span>
            <button 
              className="btn btn-outline-primary"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
