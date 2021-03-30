import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const WhatWeDo = ({ items }) => {
  return (
    <div className="whatwedo">
      <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold has-text-centered is-family-primary has-text-primary">
        WHAT WE DO
      </h1>
      {items.map((item) => (
        <div className="columns is-vcentered" key={item.text}>
          <div className="column">
            <p>{item.text}</p>
          </div>
          <div className="column is-2">
            <div>
              <PreviewCompatibleImage
                style={{ width: '80%', height: 'auto', margin: 'auto' }}
                imageInfo={{ image: item.image }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
