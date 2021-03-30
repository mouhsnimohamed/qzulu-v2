import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Gratitude = ({ gratitude }) => (
  <div className="margin-t-2">
    <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase has-text-weight-bold has-text-centered is-family-primary has-text-primary">
      OUR GRATITUDE
    </h1>
    <div className="our-gratitude">
      {gratitude.map((item) => (
        <div className="columns gratitude-item" key={item.text}>
          <div className="column is-2">
            <PreviewCompatibleImage
              style={{
                margin: 'auto',
                width: '60%',
                borderRadius: '50%',
              }}
              imageInfo={item}
            />
          </div>
          <div className="column">
            <Paragraph p={item.text} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

Gratitude.propTypes = {
  values: PropTypes.shape({
    image: PropTypes.object,
    text: PropTypes.string,
  }),
};

export default Gratitude;
