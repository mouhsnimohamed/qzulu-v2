import React from 'react';
import PropTypes from 'prop-types';

const OurValues = ({ values }) => (
  <div className="margin-t-2">
    <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold has-text-centered is-family-primary has-text-primary">
      OUR VALUES
    </h1>
    <p className="costum-p has-text-centered">{values.intro}</p>
    <div className="columns is-multiline values-holder has-space-between">
      {values.valuesList.map((item) => (
        <div key={item.text} className="column is-6 text-holder">
          <div>
            <h4 className="has-text-weight-bold is-size-5 value-title">
              {item.title}
            </h4>
            <p className="has-text-justified">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

OurValues.propTypes = {
  values: PropTypes.shape({
    intro: PropTypes.string,
    valueslist: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
};

export default OurValues;
