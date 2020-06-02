import React, {Component, createRef} from 'react';
import '@root/app/app.scss';
import {Link} from 'react-router-dom';
import Logo from '@root/media/images/logo_white.png';
import {getCatalog} from '@root/app/api';
import {HEADER_HEIGHT, PAGE} from '@root/app/constants';
import Header from '@root/app/components/header';
import About from '@root/app/pages/about';
import Classes from '@root/app/pages/classes';
import Store from '@root/app/pages/store';
import Contact from '@root/app/pages/contact';

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
      top: this[this.props.page].current.offsetTop - HEADER_HEIGHT,
    });
  };

  componentDidMount = () => {
    getCatalog().then(classes => {
      this.setState({classes}, () => {
        // If we do this outside of this API call then the page height changes due to the classes loading
        // Should either server side render this with the classes already there or add a loading visual and remove when loaded
        if (this.props.page !== PAGE.HOME) {
          this.scrollToSelectedPage(false);
        }
      });
    });
    this.setState({[`${this.props.page}Opacity`]: 1}, () => {
      const createObserver = (page, elem) => {
        const key = `${page}Opacity`;
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              console.log(entry);
              if (entry.isIntersecting) {
                // We're considering this landing on the page at this point
                this.setState({
                  [key]: entry.intersectionRatio > 0.1 ? 1 : 0.1,
                });
                if (
                  this.props.page !== page &&
                  (entry.intersectionRatio > 0.1 &&
                  entry.boundingClientRect.top > 0)
                  || entry.intersectionRatio >= .5
                ) {
                  this.props.history.push(page, {fromScroll: true});
                }
              }
            });
          },
          {
            threshold: [0.1, .5, 1],
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

  getContactHeight = () => window.innerHeight - HEADER_HEIGHT;

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
          <About ref={this.about} opacity={this.state.aboutOpacity} />
          <Classes
            ref={this.classes}
            opacity={this.state.classesOpacity}
            classes={this.state.classes}
          />
          <Store ref={this.store} opacity={this.state.storeOpacity} />
          <Contact
            ref={this.contact}
            opacity={this.state.contactOpacity}
            height={this.getContactHeight()}
          />
        </div>
      </>
    );
  }
}
export default App;
