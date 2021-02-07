import React, {useState} from 'react';
import {EMAIL_ADDRESS} from '@root/app/constants';
import {checkout} from '@root/core/api';
import '@root/app/pages/classes.scss';

const ClassDescription = ({description}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <p onClick={() => setExpanded(!expanded)}>
      {expanded ? (
        <>
          {description}
          <br />
        </>
      ) : (
        `${description.slice(0, 140)}...`
      )}
      <button className="ClassDescription-more">
        {expanded ? 'View Less' : 'View More'}
      </button>
    </p>
  );
};

const ClassItems = ({classes}) => {
  const handleClick = ({catalogItemId, name, amount}) => {
    if (parseInt(amount, 10) > 0) {
      checkout({isVirtualItem: true, items: [{id: catalogItemId, qty: '1'}]});
    } else {
      window.open(`mailto:${EMAIL_ADDRESS}?subject=${name}`);
    }
  };
  return (
    <div className="ClassItems">
      {Object.entries(classes).map(([id, {name, amount, description, catalogItemId}]) => (
        <div key={id} className="ClassItems-block">
          <div className="ClassItems-blockInner">
            <h3 className="ClassItems-name">{name}</h3>
            <div className="ClassItems-purchase">
              <span className="ClassItems-price">${amount}</span>
              <button
                className="ClassItems-cta"
                onClick={() => handleClick({catalogItemId, name, amount})}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="ClassItems-desc">
            {description.length > 140 ? (
              <ClassDescription description={description} />
            ) : (
              description
            )}
          </div>
        </div>
      ))}
      {classes.length === 0 && (
        <div className="ClassItems-block">
          <p className="u-Copy u-Color--white">
            There was a problem trying to load classes. Try refreshing the page.
            <br />
            Please reach out to us if it still doesn't work.
            <br />
            <a className="u-Color--white" href={`mailto:${EMAIL_ADDRESS}`}>
              {EMAIL_ADDRESS}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

const Classes = React.forwardRef((props, ref) => {
  return (
    <div className="Classes" ref={ref} style={{opacity: props.opacity}}>
      <div className="Classes-block">
        <h1 className="Classes-header">Sign up for Yoga Classes Today!</h1>
        <p className="Classes-copy">
          All sessions are currently virtual and start at 9:30 am for the day
          listed. You will receive an email with a link to join the session for
          that day.
        </p>
      </div>
      <ClassItems classes={props.classes} />
    </div>
  );
});

export default Classes;
