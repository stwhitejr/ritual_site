import React, {
  Component,
  createRef,
  useEffect,
  useState,
  Fragment,
} from 'react';
// import PropTypes from 'prop-types';
import '@root/app/app.scss';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import Logo from '@root/media/images/logo_white.png';
import LogoTealCircle from '@root/media/images/logo_circle_teal.png';
import Owner from '@root/media/images/owner.jpg';
import SaleCandle1 from '@root/media/images/sale_candle_1.jpg';
import SaleCandle2 from '@root/media/images/sale_candle_2.jpg';
import {getCatalog, checkout} from '@root/app/api';

const EMAIL_ADDRESS = 'ritualyogastudio@gmail.com';
const FACEBOOK_URL = 'https://www.facebook.com/Ritual-Yoga-110109617289568/';
const INSTAGRAM_URL = 'https://www.instagram.com/ritual_yoga_/?hl=en';
const SMALL_SCREEN_CUTOFF = 640;
const HEIGHT_HEIGHT = 100;

const PAGE = {
  HOME: 'home',
  ABOUT: 'about',
  CLASSES: 'classes',
  STORE: 'store',
  CONTACT: 'contact',
};

const Header = props => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (window.screen.width > SMALL_SCREEN_CUTOFF) {
      setShowNav(true);
    }
  }, [window.screen.width]);

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
            to="about"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.ABOUT,
            })}
          >
            about
          </Link>
          <div className="Header-navDivider">|</div>
          <Link
            to="classes"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.CLASSES,
            })}
          >
            classes
          </Link>
          <div className="Header-navDivider">|</div>
          <Link
            to="store"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.STORE,
            })}
          >
            store
          </Link>
          <div className="Header-navDivider">|</div>
          <Link
            to="contact"
            className={cx('Header-navItem', {
              'is-selected': props.page === PAGE.CONTACT,
            })}
          >
            contact
          </Link>
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

const testimonials = [
  {
    copy:
      `I’ve practiced yoga on and off since I was a teen, and I've never had a teacher who is able to balance giving clear instruction and meditative guidance as well as Sara. I felt like Goldilocks when I found her practice — not too hippy crunchy, not too 'no pain no gain' — just right. She delivers the whole body experience yoga is meant to be in the best way. And her playlists are bomb.`,
    author: 'Melissa C',
  },
  {
    copy: `Sara brings good vibes and intentions as she builds upon an unsuspectingly challenging and dynamic flow. Her class sneaks up on you when you least it expect it! If you don't want the challenge, Sara offers modifications that make it effortless to stay in the same flow but in a more gentle way. Heck sometimes I just lay on my mat and breathe! That's the beauty of Ritual Yoga, high or low there is always something for everyone to get what they came for.`,
    author: 'Theresia C',
  },
  {
    copy: `Sara is the reason I practice yoga and is the reason I continue to practice yoga. Whether for the beginner or experienced, casual or dedicated, she is an exceptional teacher and you should join and support her!`,
    author: 'John F',
  },
  {
    copy: `Sara is a strong lady, inside and out! When I saw her Ritual Yoga web site, I was literally excited. I feel that I can continue to connect to the incredible yoga community that Sara embodies! Thank you Sara!`,
    author: 'Rachel N',
  },
];
const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTransitioning, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 9000);
    setTimeout(() => {
      setTransition(false);
      if (testimonialIndex === testimonials.length - 1) {
        setTestimonialIndex(0);
      } else {
        setTestimonialIndex(testimonialIndex + 1);
      }
    }, 10000);
  }, [testimonialIndex]);

  return (
    <div className="Testimonials">
      <div className="Testimonials-inner">
        <p
          className={cx('Testimonials-copy', {
            'is-transitioning': isTransitioning,
          })}
        >
          “{testimonials[testimonialIndex].copy}”
        </p>
        <p
          className={cx('Testimonials-author', {
            'is-transitioning': isTransitioning,
          })}
        >
          - {testimonials[testimonialIndex].author}
        </p>
      </div>
    </div>
  );
};

const ClassDescription = ({description}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded ? description : `${description.slice(0, 140)}...`}
      <button className="ClassDescription-more" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'View Less' : 'View More'}
      </button>
    </>
  );
};

const ClassItems = ({classes}) => {
  const handleClick = catalogItemId => checkout(catalogItemId);
  return (
    <div className="ClassItems">
      {classes.map(({name, amount, description, catalogItemId}) => (
        <div key={name} className="ClassItems-block">
          <div className="ClassItems-blockInner">
            <h3 className="ClassItems-name">{name}</h3>
            <div className="ClassItems-purchase">
              <span className="ClassItems-price">${amount}</span>
              <button className="ClassItems-cta" onClick={() => handleClick(catalogItemId)}>Buy Now</button>
            </div>
          </div>
          <p className="ClassItems-desc">
            {description.length > 140 ? (
              <ClassDescription description={description} />
            ) : (
              description
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

class App extends Component {
  state = {
    aboutOpacity: 0.1,
    classesOpacity: 0.1,
    storeOpacity: 0.1,
    contactOpacity: 0.1,
    classes: [],
  };

  scrollToSelectedPage = (smooth = true) => {
    window.scrollTo({
      behavior: smooth ? 'smooth' : 'auto',
      top: this[this.props.page].current.offsetTop - HEIGHT_HEIGHT,
    });
  };

  componentDidMount = () => {
    getCatalog().then(classes => {
      this.setState({classes});
    });
    if (this.props.page !== PAGE.HOME) {
      this.scrollToSelectedPage(false);
    }
    this.setState({[`${this.props.page}Opacity`]: 1}, () => {
      const createObserver = (page, elem) => {
        const key = `${page}Opacity`;
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // We've considering this landing on the page at this point
                this.setState({
                  [key]: entry.intersectionRatio >= 0.25 ? 1 : 0.1,
                });
                if (
                  entry.intersectionRatio >= 0.25 &&
                  this.props.page !== page
                ) {
                  this.props.history.push(page, {fromScroll: true});
                }
              }
            });
          },
          {
            threshold: [0.1, 0.25],
          }
        );
        observer.observe(elem);
      };

      createObserver('about', this.about.current);
      createObserver('classes', this.classes.current);
      createObserver('store', this.store.current);
      createObserver('contact', this.contact.current);
    });
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.page !== this.props.page &&
      !this.props.history.location.state?.fromScroll
    ) {
      this.scrollToSelectedPage();
      // incase our observer changes the opacity too low, using setTimeout since we have a smooth scroll on the window
      setTimeout(() => this.setState({[`${this.props.page}Opacity`]: 1}), 1000);
    }
  };

  getContactHeight = () => window.innerHeight - HEIGHT_HEIGHT;

  about = createRef();
  classes = createRef();
  store = createRef();
  contact = createRef();
  wrapper = createRef();

  render() {
    return (
      <>
        <div className="Home">
          <div className="Home-inner">
            <img src={Logo} className="Home-logo" alt="Ritual Yoga" />
            <h1 className="Home-title">What’s Your Ritual?</h1>
            <p className="Home-intro">
              Ritual Yoga Studio will be opening soon in South Weymouth, MA.
              Until then we’ll be offering all of our classes virtually. See our
              list of classes below to sign up today!
            </p>
          </div>
          <Link to="about" className="Home-arrow">
            <i className="fa fa-angle-double-down" />
          </Link>
        </div>
        <div ref={this.wrapper}>
          <Header isVisible={this.props.displayHeader} page={this.props.page} />
          <div
            className="About"
            ref={this.about}
            style={{opacity: this.state.aboutOpacity}}
          >
            <Hero page="about" />
            <div className="u-Wrap">
              <section className="u-Column">
                <h2 className="u-Header">About Ritual Yoga Studios</h2>
                <p className="u-Copy">
                  At Ritual Yoga, we embrace and cultivate practices that
                  empower you to be happy, healthy and uniquely you!
                </p>
                <p className="u-Copy" style={{paddingBottom: '30px'}}>
                  Through a daily yoga practice you’ll learn to love every part
                  of yourself, freeing you to live your most authentic life.
                  This is the “me time” that you deserve — that time and space
                  to give your mind body exactly what it needs.
                </p>
                <h3 className="u-SubHeader">
                  Are you an avid yogi? A “drop in when you have the time”
                  go-getter? Or perhaps entirely new to the world of yoga?
                </h3>
                <p className="u-Copy">
                  Ritual Yoga welcomes all and offers the variety to suit
                  everyone’s needs – whether that means getting a hard work out
                  or just unwinding from a long day — we offer classes for all.
                </p>
                <p className="u-Copy">
                  Check out the{' '}
                  <Link to="classes" className="u-Link">
                    classes
                  </Link>{' '}
                  we have to offer below and feel free to reach out to us with
                  any questions if you‘re unsure of what best fits your needs.
                </p>
                <h2 className="u-SubHeader">
                  All of our classes are currently virtual until we can open our
                  new space in South Weymouth, MA
                </h2>

                <Testimonials />
              </section>
              <section className="u-Column">
                <h2 className="u-Header">Meet The Owner</h2>
                <img
                  src={Owner}
                  className="About-ownerImage"
                  alt="Ritual Yoga"
                />
                <p className="u-Copy">
                  Sara White had an interest in yoga before she even really knew
                  what it was. As a child her mother’s friend taught her poses
                  on the living room floor. A kid with an active imagination who
                  loves bending, flipping, and of course making “potions” from
                  dirt and glitter. Sara and her best friend would retreat to
                  their orange shag rug clubhouse where they would burn incense
                  and listen to meditation tapes gifted to her by her Uncle, who
                  studied in Persia. Surrounded by tapestries and crystals, for
                  Sara, this was true magic.
                </p>
                <p className="u-Copy">
                  It wasn't long before Sara started practicing yoga reguarly.
                  After soccer practice, school, whenever she could. During the
                  difficult teen years she found solace through her practice.
                  This is when she realized how powerful yoga really was. How it
                  was much more than just a way to excerise or stretch your
                  muscles.
                </p>
                <p className="u-Copy">
                  In 2014, Sara traveled to India where she attended an
                  intensive 200 hour training to become a yoga teacher. Here she
                  learned how to share her love for the practice that has helped
                  her grow to be the woman she is today. She has taught in many
                  different studios, gyms, parks, and now her own living room.
                  Her dream has always been to share this power of both mental
                  and physical strength, to feel the magic within themselves,
                  through the practice of yoga.
                </p>
                <h3 className="u-SubHeader">
                  So what are you waiting for? Start your journey with Sara
                  today!
                </h3>
              </section>
            </div>
          </div>
          <div
            className="Classes"
            ref={this.classes}
            style={{opacity: this.state.classesOpacity}}
          >
            <div className="Classes-block">
              <h1 className="Classes-header">
                Sign up for Yoga Classes Today!
              </h1>
              <p className="Classes-copy">
                While we’re waiting for our studio to open in South Shore
                Massachusetts we’re offerring virtual yoga sessions. Check out
                what we have to offer below or please contact us with any
                questions.
              </p>
            </div>
            <ClassItems classes={this.state.classes} />
          </div>
          <div
            className="Store"
            ref={this.store}
            style={{opacity: this.state.storeOpacity}}
          >
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
                        Hand made from soy wax and essential oils.Great addition
                        to our virtual classes!
                      </p>
                    </div>
                    <div>
                      <p className="Store-price">$20.00 each</p>
                      <button className="Store-cta">Out of Stock</button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="u-Column">
                <div className="Store-item">
                  <img
                    src={SaleCandle2}
                    className="Store-image"
                    alt="4 oz Custom Self Care Candles"
                  />
                  <div className="Store-content">
                    <div>
                      <h3 className="Store-header">
                        4 oz Custom Self Care Candles
                      </h3>
                      <p className="Store-desc">
                        Hand made from soy wax and essential oils.For your
                        wellness retreats and workshops!
                      </p>
                    </div>
                    <div>
                      <p className="Store-price">$20.00 each</p>
                      <button className="Store-cta">Out of Stock</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div
            className="Contact"
            ref={this.contact}
            style={{
              opacity: this.state.contactOpacity,
              height: this.getContactHeight(),
            }}
          >
            <h2 className="Contact-header">Get in Touch With Us!</h2>
            <h3 className="Contact-type">Email</h3>
            <a className="Contact-email">{EMAIL_ADDRESS}</a>
            <h3 className="Contact-type">Social</h3>
            <div className="Contact-social">
              <a href={FACEBOOK_URL} className="Contact-icon">
                <i className="fab fa-facebook-square" />
              </a>
              <a href={INSTAGRAM_URL} className="Contact-icon">
                <i className="fab fa-instagram-square" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
