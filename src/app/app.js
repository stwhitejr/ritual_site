import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@root/app/app.scss';
import cx from 'classnames';
import Logo from '@root/media/images/logo_white.png';
import LogoTealCircle from '@root/media/images/logo_circle_teal.png';
import Owner from '@root/media/images/owner.jpg';
import SaleCandle1 from '@root/media/images/sale_candle_1.jpg';
import SaleCandle2 from '@root/media/images/sale_candle_2.jpg';

const EMAIL_ADDRESS = 'ritualyogastudio@gmail.com';
const FACEBOOK_URL = 'https://www.facebook.com/Ritual-Yoga-110109617289568/';
const INSTAGRAM_URL = 'https://www.instagram.com/ritual_yoga_/?hl=en';

const Header = props => {
  return (
    <div className="Header">
      <div className="Header-inner">
        <img src={LogoTealCircle} className="Header-logo" alt="Ritual Yoga" />
        <div className="Header-nav">
          <a className={cx('Header-navItem', {'is-selected': props.about})}>
            about
          </a>
          <a className={cx('Header-navItem', {'is-selected': props.classes})}>
            classes
          </a>
          <a className={cx('Header-navItem', {'is-selected': props.store})}>
            store
          </a>
          <a className={cx('Header-navItem', {'is-selected': props.contact})}>
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

const Hero = props => {
  return (
    <div className={`Hero Hero--${props.page}`}>
      {props.header && props.copy && (
        <div className="Hero-block">
          <h2 className="Hero-header">{props.header}</h2>
          <p className="Hero-copy">{props.copy}</p>
        </div>
      )}
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <>
        <div className="Home">
          <div>
            <img src={Logo} className="Home-logo" alt="Ritual Yoga" />
            <h1 className="Home-title">What’s Your Ritual?</h1>
            <p className="Home-intro">
              At Ritual Yoga Studio (soon to be located in South Weymouth, MA)
              we embrace and cultivate practices that empower you to be happy,
              healthy anduniquely you!
            </p>
          </div>
          <a className="Home-arrow">
            <i class="fa fa-angle-double-down" />
          </a>
        </div>
        <div>
          <Header about />
          <div className="About">
            <Hero page="about" />
            <div className="u-Wrap">
              <section className="u-Column">
                <h2 className="u-Header">About Ritual Yoga Studios</h2>
                <p className="u-Copy">
                  Through a daily yoga practice you can learn to love every part
                  of yourself, freeing you to lve your best life. Everyone
                  deserves “me time”. That time and space to give your body and
                  mind exactly it needs.
                </p>
                <p className="u-Copy">
                  Not sure what that is? Whether you like to sweat, chill or
                  anything in between we offer a variety of styles to suit your
                  needs!
                </p>
                <p className="u-Copy">
                  While our studio is getting rady to open, you can practice an
                  all levels Vinyasa Flow with founder Sara White daily at 9:30
                  AM via Zoom or check out our video library.
                </p>
              </section>
              <section className="u-Column">
                <h2 className="u-Header">Meet The Owner</h2>
                <img
                  src={Owner}
                  className="About-ownerImage"
                  alt="Ritual Yoga"
                />
                <p className="u-Copy">
                  Through a daily yoga practice you can learn to love every part
                  of yourself, freeing you to lve your best life. Everyone
                  deserves “me time”. That time and space to give your body and
                  mind exactly it needs.
                </p>
                <p className="u-Copy">
                  Through a daily yoga practice you can learn to love every part
                  of yourself, freeing you to lve your best life. Everyone
                  deserves “me time”. That time and space to give your body and
                  mind exactly it needs.
                </p>
              </section>
            </div>
          </div>
          <div className="Classes">
            <div className="Classes-block">
              <h2 className="u-Header u-Color--white">Yoga Classes</h2>
              <p className="u-Copy u-Color--white">
                Through a daily yoga practice you can learn to love every part
                of yourself, freeing you to lve your best life. Everyone
                deserves “me time”. That time and space to give your body and
                mind exactly it needs. While our studio is getting rady to open,
                you can practice an all levels Vinyasa Flow with founder Sara
                White daily at 9:30 AM via Zoom or check out our video library.
              </p>
              <p className="u-Copy u-Color--white">
                Through a daily yoga practice you can learn to love every part
                of yourself, freeing you to lve your best life. Everyone
                deserves “me time”. That time and space to give your body and
                mind exactly it needs. While our studio is getting rady to open,
                you can practice an all levels Vinyasa Flow with founder Sara
                White daily at 9:30 AM via Zoom or check out our video library.
              </p>
            </div>
            <button className="Classes-cta">Sign up for Yoga Classes!</button>
          </div>
          <div className="Store">
            <Hero
              page="store"
              header="The Ritual Store"
              copy="Welcome to our humble little store. When we’re not practicing yoga we’re putting our positive vibes into crafting these items with love and detail that we hope our Ritual family members will enjoy!"
            />
            <div className="u-Wrap">
              <section className="u-Column">
              <div className="Store-item">
                  <img
                    src={SaleCandle1}
                    className="Store-image"
                    alt="8 0z Aromatheraphy Candles"
                  />
                  <div className="Store-content">
                    <div>
                      <h3 className="Store-header">
                        8 0z Aromatheraphy Candles
                      </h3>
                      <p className="Store-desc">
                      Hand made from soy wax and essential oils.Great addition to our virtual classes!
                      </p>
                    </div>
                    <div>
                      <p className="Store-price">
                        $20.00 each
                      </p>
                      <button className="Store-cta">Buy Now</button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="u-Column">
                <div className="Store-item">
                  <img
                    src={SaleCandle2}
                    className="Store-image"
                    alt="4 oz Custom Self Care Sandles"
                  />
                  <div className="Store-content">
                    <div>
                      <h3 className="Store-header">
                        4 oz Custom Self Care Sandles
                      </h3>
                      <p className="Store-desc">
                        Hand made from soy wax and essential oils.For your wellness retreats and workshops!
                      </p>
                    </div>
                    <div>
                      <p className="Store-price">
                        $20.00 each
                      </p>
                      <button className="Store-cta">Buy Now</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="Contact">
            <h2 className="Contact-header">Get in Touch With Us!</h2>
            <h3 className="Contact-type">Email</h3>
            <a className="Contact-email">ritualyoga@gmail.com</a>
            <h3 className="Contact-type">Social</h3>
            <div className="Contact-social">
              <a href={FACEBOOK_URL} className="Contact-icon"><i class="fab fa-facebook-square" /></a>
              <a href={INSTAGRAM_URL} className="Contact-icon"><i class="fab fa-instagram-square" /></a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
