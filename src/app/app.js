import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@root/app/app.scss';
import Logo from '@root/media/images/logo_white.png';

const EMAIL_ADDRESS = 'ritualyogastudio@gmail.com';
const FACEBOOK_URL = 'https://www.facebook.com/Ritual-Yoga-110109617289568/';
const INSTAGRAM_URL = 'https://www.instagram.com/ritual_yoga_/?hl=en';

class App extends Component {

  render() {
    return (
      <div className="Wrap">
        <img src={Logo} className="Logo" />
        <a href={`mailto:${EMAIL_ADDRESS}`} rel="noopener noreferrer" className="SignUp">Sign Up for Virtual Classes!</a>
        <div className="Social">
          <a href={FACEBOOK_URL} className="Social-icon"><i class="fab fa-facebook-square" /></a>
          <a href={INSTAGRAM_URL} className="Social-icon"><i class="fab fa-instagram-square" /></a>
        </div>
      </div>
    );
  }
}
export default App;
