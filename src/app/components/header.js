import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {SMALL_SCREEN_CUTOFF, PAGE} from '@root/app/constants';
import LogoTealCircle from '@root/media/images/logo_circle_teal.png';
import cx from 'classnames';
import '@root/app/components/header.scss';

const Header = props => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (window.screen.width > SMALL_SCREEN_CUTOFF) {
      setShowNav(true);
    }
    if (showNav) {
      setShowNav(false);
    }
  }, [window.screen.width, window.location.href]);

  const getShowMobileNavButton = () =>
    window.screen.width <= SMALL_SCREEN_CUTOFF;
  const handleClickMobileNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div
      className={cx('Header', {
        'is-navOpen': showNav,
      })}
    >
      {getShowMobileNavButton() && (
        <button
          onClick={handleClickMobileNav}
          className="Header-mobileNavButton"
        >
          <i className="fa fa-bars" />
        </button>
      )}
      <div
        className={cx('Header-inner', {
          'is-visible': props.isVisible,
        })}
      >
        <img src={LogoTealCircle} className="Header-logo" alt="Ritual Yoga" />
        <div
          className={cx('Header-nav', {
            'is-navOpen': showNav,
          })}
        >
          <Link
            to="/about"
            className={cx('Header-navItem', {
              'is-selected':
                props.page === PAGE.ABOUT || props.page === PAGE.HOME,
            })}
          >
            about
          </Link>
          <div className="Header-navDivider">|</div>
          <Link
            to="/classes"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.CLASSES,
            })}
          >
            classes
          </Link>
          <div className="Header-navDivider">|</div>
          <Link
            to="/store"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.STORE,
            })}
          >
            store
          </Link>
          <div className="Header-navDivider">|</div>
          {/* TODO: Create a proper and separate contact page
          <Link
            to="contact"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.CONTACT,
            })}
          >
            contact
          </Link> */}
          <a
            href="#Footer"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.CONTACT,
            })}
          >
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
