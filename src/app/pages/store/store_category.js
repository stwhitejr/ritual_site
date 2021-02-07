import React from 'react';
import {NavLink} from 'react-router-dom';
import '@root/app/pages/store/store_category.scss';

const StoreCategory = ({categoryName, urlSafeCategoryName, catalog}) => {
  return (
    <>
      <h2 className="StoreCategory-title">{categoryName}</h2>
      <div className="StoreCategory-items">
        {Object.entries(catalog).map(([key, value]) => (
          <NavLink
            to={`/store/${urlSafeCategoryName}/${value.urlSafeName}`}
            key={key}
            className="StoreCategory-itemWrapper"
          >
            <div className="StoreCategory-item">
              <img src={value.images[0]} className="StoreCategory-img" />
              <h3 className="StoreCategory-name">{value.name}</h3>
              <div className="StoreCategory-price">${value.amount}</div>
              <button className="StoreCategory-button">View Product</button>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default StoreCategory;
