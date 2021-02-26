import React from 'react';
import {Link} from 'react-router-dom';
import '@root/app/pages/store/store_categories.scss';

const StoreCategories = ({catalog}) => {
  const getImage = item => {
    return Object.values(item)[0].images[0];
  };
  const getCategoryName = item => Object.values(item)[0].categoryName;
  const getUrlSafeCategoryName = item =>
    Object.values(item)[0].urlSafeCategoryName;

  return Object.entries(catalog).map(([key, value]) => (
    <Link
      to={`/store/${getUrlSafeCategoryName(value)}`}
      key={key}
      style={{
        width: '23%',
      }}
    >
      <div
        className="StoreCategories-item"
        style={{backgroundImage: `url('${getImage(value)}')`}}
      >
        <h3 className="StoreCategories-title">{getCategoryName(value)}</h3>
      </div>
    </Link>
  ));
};

export default StoreCategories;
