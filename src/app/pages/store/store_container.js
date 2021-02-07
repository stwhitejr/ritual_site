import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {checkout} from '@root/core/api';
import Hero from '@root/app/components/hero';
import Cart from '@root/app/pages/store/cart';
import '@root/app/pages/store/store.scss';

const getCart = () => {
  // Attempt to retrieve previous cart from local storage
  const storage = window.localStorage;
  const cartFromStorage = storage.getItem('RitualCart');
  if (cartFromStorage) {
    try {
      const parsedCart = JSON.parse(cartFromStorage);
      if (Array.isArray(parsedCart)) {
        return parsedCart;
      }
    } catch (error) {
      console.error(error);
    }
  }
  return [];
};

const StoreContainer = React.forwardRef((props, ref) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (props.location.hash !== '#Footer') {
      const headerHeight = document.querySelector('.Header')?.offsetHeight || 80;
      window.scrollTo({
        top:
          props.match.path !== '/store' ? wrapperRef.current.offsetTop - headerHeight : 0,
        behavior: 'smooth',
      });
    }
  }, [props.match.path]);

  const [cart, updateCart] = useState(getCart());
  const [cartModalOpen, setCartModalOpen] = useState(false);

  useEffect(() => {
    const storage = window.localStorage;
    storage.setItem('RitualCart', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = item => updateCart([...cart, item]);

  const removeItemFromCart = id => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
    if (cartModalOpen && updatedCart.length === 0) {
      setCartModalOpen(false);
    }
  };

  const checkoutWithCart = ({fulfillment, promo = ''}) =>
    checkout({
      items: cart.map(item => ({...item, qty: item.qty.selected})),
      fulfillment,
      promo: promo.toUpperCase(),
    });

  const onChangeQty = (value, id) => {
    updateCart(
      cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            qty: {
              ...item.qty,
              selected: value,
            },
          };
        }
        return item;
      })
    );
  };

  const getIsItemInCart = catalogItemId =>
    cart.find(item => item.id === catalogItemId);

  const {
    params: {item: urlSafeItemName, category: urlSafeCategoryName},
  } = props.match;

  let catalog = props.catalog.items;
  if (urlSafeItemName || urlSafeCategoryName) {
    const [categoryId] = Object.entries(props.catalog.categories).find(
      ([_, value]) => value.urlSafeName === urlSafeCategoryName
    );
    catalog = catalog[categoryId];

    if (urlSafeItemName) {
      const [itemId] = Object.entries(props.catalog.items[categoryId]).find(
        ([_, value]) => value.urlSafeName === urlSafeItemName
      );
      catalog = catalog[itemId];
    }
  }

  const categoryName = urlSafeItemName
    ? catalog.categoryName
    : urlSafeCategoryName
    ? Object.values(catalog)[0].categoryName
    : null;
  const itemName = urlSafeItemName ? catalog.name : null;

  return (
    <>
      <div className="Store" ref={ref} style={{opacity: props.opacity}}>
        <Hero
          page="store"
          header="The Ritual Store"
          copy="Welcome to our humble little store. When we’re not practicing yoga we’re putting our positive vibes into crafting these items with love and detail that we hope our Ritual family members will enjoy!"
        />
        <div className="Store-wrap" ref={wrapperRef}>
          <div className="Store-crumbs">
            <Link to="/store">Categories</Link>
            {urlSafeCategoryName && (
              <span className="Store-crumb">
                -&nbsp;{' '}
                <Link to={`/store/${urlSafeCategoryName}`}>{categoryName}</Link>
              </span>
            )}
            {urlSafeItemName && (
              <span className="Store-crumb">
                -&nbsp;{' '}
                <Link to={`/store/${urlSafeCategoryName}/${urlSafeItemName}`}>
                  {itemName}
                </Link>
              </span>
            )}
          </div>
          {Object.keys(props.catalog).length > 0 ? (
            <props.children
              catalog={catalog}
              categoryName={categoryName}
              itemName={itemName}
              urlSafeCategoryName={urlSafeCategoryName}
              urlSafeItemName={urlSafeItemName}
              addItemToCart={addItemToCart}
              getIsItemInCart={getIsItemInCart}
              addItemToCart={addItemToCart}
            />
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
      {cart.length > 0 && (
        <>
          <button
            className="Store-cartButton"
            onClick={() => setCartModalOpen(!cartModalOpen)}
          >
            <i className="fa fa-shopping-cart" />
            &nbsp; You have {cart.length} {cart.length > 1 ? 'items' : 'item'}{' '}
            in your cart
          </button>
          {cartModalOpen && (
            <Cart
              closeModal={() => setCartModalOpen(false)}
              cart={cart}
              handleClickRemove={removeItemFromCart}
              handleChangeQty={onChangeQty}
              handleClickCheckout={checkoutWithCart}
              shippingItem={props.shippingItem}
            />
          )}
        </>
      )}
    </>
  );
});

export default StoreContainer;
