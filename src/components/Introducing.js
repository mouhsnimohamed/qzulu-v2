import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Introducing = ({ items }) => {
  return (
    <div>
      <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold	has-text-centered is-family-primary has-text-primary">
        INTRODUCING
      </h1>
      <div className="introducing columns is-multiline has-space-between">
        {items.map((item) => (
          <div
            className="introducing-item column is-5 columns"
            key={item.title}>
            <div className="column is-one-quarter">
              <PreviewCompatibleImage imageInfo={{ image: item.image }} />
            </div>
            <div className="column">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introducing;
