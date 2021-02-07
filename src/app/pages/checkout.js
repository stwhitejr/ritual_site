import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '@root/media/images/logo_white.png';
import '@root/app/pages/checkout.scss';

const Checkout = () => {
  useEffect(() => {
    // Remove cart from storage
    const storage = window.localStorage;
    storage.removeItem('RitualCart');
  }, []);
  return (
    <div className="Checkout">
      <div className="Checkout-inner">
      <img src={Logo} className="Checkout-logo" alt="Ritual Yoga" />
        <h1 className="Checkout-title">Thank you for your order!</h1>
        <h3 className="Checkout-copy">You should receive an email with a link to your session the night before or morning of.</h3>
        <Link to="/" className="Checkout-button">Back to Ritual Yoga Studio</Link>
      </div>
    </div>
  );
};

export default Checkout;
