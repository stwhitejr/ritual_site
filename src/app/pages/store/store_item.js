import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import '@root/app/pages/store/store_item.scss';

const getQtyList = qty => {
  const list = [];
  for (let index = 1; index <= qty; index++) {
    list.push(index.toString());
  }
  return list;
};

const ItemGallery = ({images}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="ItemGallery">
      <img src={images[index]} className="ItemGallery-img" />
      <div className="ItemGallery-thumbs">
        {images.map((image, i) => (
          <img
            src={image}
            key={image}
            onClick={() => setIndex(i)}
            className={cx('ItemGallery-thumb', {
              'is-selected': i === index,
            })}
          />
        ))}
      </div>
    </div>
  );
};

const StoreItem = ({catalog, getIsItemInCart, addItemToCart}) => {
  const [selectedVariation, setSelectedVariation] = useState(
    catalog.variations[0]
  );
  const [qty, setQty] = useState(1);

  const handleClick = () =>
    addItemToCart({
      ...catalog,
      id: selectedVariation.catalogItemId,
      variation: selectedVariation.variationName,
      qty: {
        selected: qty,
        available: getQtyList(selectedVariation.quantity),
      },
      amountRaw: selectedVariation.amountRaw,
    });
  return (
    <div className="StoreItem-item">
      <ItemGallery images={catalog.images} />
      <div className="StoreItem-info">
        <h2 className="StoreItem-title">{catalog.name}</h2>
        <p className="StoreItem-price">
          ${selectedVariation.amount}{' '}
          <div className="StoreItem-priceExtra">
            + tax and shipping where applicable
          </div>
        </p>
        <p className="StoreItem-desc">{catalog.description}</p>
        <div className="StoreItem-actions">
          <div className="StoreItem-optionWrap">
            <span className="StoreItem-selectTitle">Type:</span>
            <select
              className="StoreItem-variations"
              onChange={({target: {value}}) =>
                setSelectedVariation(
                  catalog.variations.find(
                    ({variationName}) => variationName === value
                  )
                )
              }
            >
              {catalog.variations.map(v => (
                <option
                  value={v.variationName}
                  selected={selectedVariation.variationName === v.variationName}
                >
                  {v.variationName}
                </option>
              ))}
            </select>
          </div>
          <div className="StoreItem-optionWrap">
            <span className="StoreItem-selectTitle">Qty:&nbsp;&nbsp;</span>
            <select onChange={({target: {value}}) => setQty(value)}>
              {getQtyList(selectedVariation.quantity).map(q => (
                <option value={q} selected={qty === q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={
              getIsItemInCart(selectedVariation.catalogItemId)
                ? null
                : handleClick
            }
            className={`StoreItem-button ${
              getIsItemInCart(selectedVariation.catalogItemId)
                ? 'StoreItem-button--disabled'
                : ''
            }`}
          >
            {getIsItemInCart(selectedVariation.catalogItemId)
              ? 'Item in Cart'
              : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
