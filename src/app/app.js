import React, {Component, createRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from '@root/app/pages/checkout';
import About from '@root/app/pages/about';
import Classes from '@root/app/pages/classes';
import StoreContainer from '@root/app/pages/store/store_container';
import StoreCategories from '@root/app/pages/store/store_categories';
import StoreCategory from '@root/app/pages/store/store_category';
import StoreItem from '@root/app/pages/store/store_item';
import {Link} from 'react-router-dom';
import Logo from '@root/media/images/logo_white.png';
import {getCatalog} from '@root/core/api';
import LogoTealCircle from '@root/media/images/logo_circle_teal.png';
import {
  HEADER_HEIGHT,
  PAGE,
  CLASS_CATEGORY_ID,
  HIDDEN_CATEGORY_ID,
  SHIPPING_ITEM_ID,
} from '@root/app/constants';
import Header from '@root/app/components/header';
import Footer from '@root/app/components/footer';
import '@root/app/app.scss';

class AppWrapper extends Component {
  state = {
    opacity: 0,
    classes: [],
    shippingItem: {},
    catalog: {},
    isLoading: true,
  };

  componentDidMount = () => {
    getCatalog()
      .then(catalog => {
        const {
          [CLASS_CATEGORY_ID]: classes,
          [HIDDEN_CATEGORY_ID]: hidden,
          ...items
        } = catalog.items;
        this.setState({
          classes,
          shippingItem: hidden[SHIPPING_ITEM_ID],
          catalog: {items, categories: catalog.categories},
        });
      })
      .catch(e => {
        throw e;
      })
      .finally(() => this.setState({isLoading: false}));
    this.setState({opacity: 1});
  };

  componentDidUpdate = prevProps => {
    if (prevProps.page !== this.props.page) {
      window.scrollTo(0, 0);
      this.setState({opacity: 0}, () => {
        setTimeout(() => {
          this.setState({opacity: 1});
        }, 100);
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({opacity: 0});
  };

  getFooterHeight = () => window.innerHeight - HEADER_HEIGHT;

  wrapper = createRef();

  render() {
    const {PageComponent} = this.props;

    return this.state.isLoading ? (
      <div className="Home">
        <div>
          <img src={LogoTealCircle} className="Home-loadingLogo" alt="Ritual Yoga" />
          <div className="Home-loadingText">Loading</div>
        </div>
      </div>
    ) : (
      <>
        {this.props.page === PAGE.HOME && (
          <div className="Home">
            <div className="Home-inner">
              <img src={Logo} className="Home-logo" alt="Ritual Yoga" />
              <h1 className="Home-title">What’s Your Ritual?</h1>
              <p className="Home-intro">
                Ritual Yoga is a virtual yoga studio and shop where you can find
                the tools to live a balanced life.
              </p>
            </div>
            <Link to="about" className="Home-arrow">
              <i className="fa fa-angle-double-down" />
            </Link>
          </div>
        )}
        <div ref={this.wrapper}>
          <Header isVisible page={this.props.page} />
          <PageComponent
            opacity={this.state.opacity}
            classes={this.state.classes}
            catalog={this.state.catalog}
            shippingItem={this.state.shippingItem}
            match={this.props.match}
            location={this.props.location}
          />
          <Footer height={this.getFooterHeight()} />
        </div>
      </>
    );
  }
}

const App = () => (
  <Router basename="/">
    <Switch>
      <Route path="/checkout" render={props => <Checkout {...props} />} />
      <Route
        path="/about"
        render={props => (
          <AppWrapper
            {...props}
            displayHeader
            PageComponent={About}
            page="about"
          />
        )}
      />
      <Route
        path="/classes"
        render={props => (
          <AppWrapper
            {...props}
            displayHeader
            PageComponent={Classes}
            page="classes"
          />
        )}
      />

      <Route
        path="/store/:category/:item"
        render={props => (
          <AppWrapper
            {...props}
            displayHeader
            PageComponent={props => (
              <StoreContainer {...props}>
                {props => <StoreItem {...props} />}
              </StoreContainer>
            )}
            page="store"
          />
        )}
      />
      <Route
        path="/store/:category"
        render={props => (
          <AppWrapper
            {...props}
            displayHeader
            PageComponent={props => (
              <StoreContainer {...props}>
                {props => <StoreCategory {...props} />}
              </StoreContainer>
            )}
            page="store"
          />
        )}
      />
      <Route
        path="/store"
        render={props => (
          <AppWrapper
            {...props}
            displayHeader
            PageComponent={props => (
              <StoreContainer {...props}>
                {props => <StoreCategories {...props} />}
              </StoreContainer>
            )}
            page="store"
          />
        )}
      />
      <Route
        path="/contact"
        render={props => <AppWrapper {...props} displayHeader />}
      />
      <Route
        path="/"
        render={props => (
          <AppWrapper {...props} PageComponent={About} page="home" />
        )}
      />
    </Switch>
  </Router>
);

export default App;
