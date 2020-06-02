import React from 'react';
import SaleCandle1 from '@root/media/images/sale_candle_1.jpg';
import SaleCandle2 from '@root/media/images/sale_candle_2.jpg';
import Hero from '@root/app/components/hero';

const Store = React.forwardRef((props, ref) => {
  return (
    <div className="Store" ref={ref} style={{opacity: props.opacity}}>
      <Hero
        page="store"
        header="The Ritual Store"
        copy="Welcome to our humble little store. When we’re not practicing yoga we’re putting our positive vibes into crafting these items with love and detail that we hope our Ritual family members will enjoy!"
      />
      <div className="u-Wrap">
        <section className="u-Column">
          <div className="Store-item">
            <img
              src={SaleCandle2}
              className="Store-image"
              alt="9 oz Aromatheraphy Candles"
            />
            <div className="Store-content">
              <div>
                <h3 className="Store-header">9 oz Aromatheraphy Candles</h3>
                <p className="Store-desc">
                  Hand made from soy wax and essential oils.Great addition to
                  our virtual Classes!
                </p>
              </div>
              <div>
                <p className="Store-price">$18.00 + tax and shipping</p>
                <button className="Store-cta">Out of Stock</button>
              </div>
            </div>
          </div>
        </section>
        <section className="u-Column">
          <div className="Store-item">
            <img
              src={SaleCandle1}
              className="Store-image"
              alt="4 oz Custom Self Care Candles"
            />
            <div className="Store-content">
              <div>
                <h3 className="Store-header">Bulk 4 oz Custom Self Care Candles</h3>
                <p className="Store-desc">
                  Hand made from soy wax and essential oils.For your wellness
                  retreats and workshops!
                </p>
              </div>
              <div>
                <p className="Store-price">$145.00 + tax and shipping</p>
                <button className="Store-cta">Out of Stock</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Store;
