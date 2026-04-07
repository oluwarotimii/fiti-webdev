import React from 'react';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Jeguns Store</a>
        <div className="navbar-nav ms-auto">
          <a
            className="nav-link" href="#" onClick={(e) => {e.preventDefault(); onCartClick();}}> 
            Cart{cartItemCount > 0 && ( <span className="badge bg-light text-dark ms-1">{cartItemCount}</span>
            )}</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;