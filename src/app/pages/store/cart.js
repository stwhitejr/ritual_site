import React, {useState} from 'react';
import '@root/app/pages/store/cart.scss';

const Cart = ({
  closeModal,
  cart,
  handleClickRemove,
  handleClickCheckout: onClickCheckout,
  handleChangeQty,
  shippingItem,
}) => {
  const [fulfillment, setFulfillment] = useState('shipping');
  const [promo, setPromo] = useState('');

  const handleClickCheckout = () => onClickCheckout({fulfillment, promo});
  // - inner margin/padding
  const getMaxModalHeight = () => `${window.innerHeight - 160}px`;

  return (
    <div className="CartModal" onClick={closeModal}>
      <div className="CartModal-inner" onClick={e => e.stopPropagation()}>
        <button className="CartModal-close" onClick={closeModal}>
          <i className="fa fa-times" />
        </button>
        <div className="CartModal-flex">
          <div
            className="CartModal-items"
            style={{maxHeight: getMaxModalHeight()}}
          >
            {cart.map(item => (
              <div className="CartModalItem">
                <img className="CartModalItem-image" src={item.images[0]} />
                <div className="CartModalItem-details">
                  <div className="CartModalItem-name">
                    <strong>Name:</strong> {item.name}
                  </div>
                  <div className="CartModalItem-name">
                    <strong>Variation:</strong> {item.variation}
                  </div>
                  <div className="CartModalItem-qty">
                    <strong>Qty:</strong>
                    <select
                      className="CartModalItem-qtySelect"
                      onChange={({target: {value}}) =>
                        handleChangeQty(value, item.id)
                      }
                    >
                      {item.qty.available.map(q => (
                        <option value={q} selected={item.qty.selected === q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="CartModal-button"
                    onClick={() => handleClickRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="CartModal-actions">
            <select onChange={({target: {value}}) => setFulfillment(value)}>
              <option value="shipping" selected={fulfillment === 'shipping'}>
                Ship to Me (${shippingItem.amount})
              </option>
              {/* <option value="pickup" selected={fulfillment === 'pickup'}>
                I’ll Pick it Up (Free)
              </option> */}
            </select>
            {fulfillment === 'pickup' && (
              <p className="CartModal-fulfillmentDesc">
                We’ll email you to arrange a pickup date after completing your
                order.
              </p>
            )}
            <div className="CartModal-promoWrap">
              <label className="CartModal-label" for="Promo">
                Promo Code
              </label>
              <input
                type="text"
                name="Promo"
                className="CartModal-input"
                onChange={({target: {value}}) => setPromo(value)}
              />
            </div>
            <button
              className="CartModal-button CartModal-button--checkout"
              onClick={handleClickCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
