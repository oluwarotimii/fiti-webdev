import React, { useState } from 'react';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsProcessing(false);
    onCheckout();
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5">
        <h3>Your cart is empty</h3>
        <p className="text-muted">Add some products to your cart!</p>
        <a className="btn btn-primary" href="/">Browse Products</a>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="list-group">
            {cartItems.map(item => (
              <div key={item.id} className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="img-fluid rounded"
                      style={{ maxHeight: '80px' }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-0">${item.price}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control mx-2 text-center" 
                        value={item.quantity}
                        min="1"
                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) - item.quantity)}
                        style={{ width: '60px' }}
                      />
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p className="mb-0">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="col-md-1">
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (8%):</span>
                <strong>${tax.toFixed(2)}</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button 
                className="btn btn-success w-100" 
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;