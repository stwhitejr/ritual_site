import React from 'react';
// import '@root/app/app.scss';
import {EMAIL_ADDRESS, FACEBOOK_URL, INSTAGRAM_URL} from '@root/app/constants';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div
      className="Contact"
      ref={ref}
      style={{opacity: props.opacity,
        height: props.height,
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
  );
});

export default Contact;
