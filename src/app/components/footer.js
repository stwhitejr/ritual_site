import React from 'react';
import {EMAIL_ADDRESS, FACEBOOK_URL, INSTAGRAM_URL} from '@root/app/constants';
import '@root/app/components/footer.scss';

const Footer = React.forwardRef((props, ref) => {
  return (
    <div
      id="Footer"
      className="Footer"
      ref={ref}
      style={{opacity: props.opacity,
        minHeight: props.height,
      }}
    >
      <h2 className="Footer-header">Get in Touch With Us!</h2>
      <h3 className="Footer-type">Email</h3>
      <a className="Footer-email">{EMAIL_ADDRESS}</a>
      <h3 className="Footer-type">Social</h3>
      <div className="Footer-social">
        <a href={FACEBOOK_URL} className="Footer-icon">
          <i className="fab fa-facebook-square" />
        </a>
        <a href={INSTAGRAM_URL} className="Footer-icon">
          <i className="fab fa-instagram-square" />
        </a>
      </div>
    </div>
  );
});

export default Footer;
