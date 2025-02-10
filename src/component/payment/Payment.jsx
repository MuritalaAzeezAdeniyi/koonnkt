
import React, { useState } from 'react';
import axios from 'axios';
import "./payment.css"
function Payment() {
   const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('NGN');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await axios.post(' http://localhost:8080/initialize', {
       
        email: email,
        amount: amount,
        currency: currency,
      });

      if (response.data.status) {
        setSuccessMessage('Payment Successful!');
      } else {
        setError('Payment initialization failed!');
      }
    } catch (error) {
      console.error('Error during payment:', error);
      setError('An error occurred while processing the payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>Pay with PayStack</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          >
            <option value="NGN">NGN (Nigerian Naira)</option>
            <option value="USD">USD (US Dollar)</option>
            <option value="GBP">GBP (British Pound)</option>
        
          </select>
        </div>
        <div className="form-group">
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};


export default Payment
