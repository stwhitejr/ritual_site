import React from 'react';
import '@root/app/components/hero.scss';

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

export default Hero;
