import React from 'react';
import Paragraph from './Paragraph';

const PrinceBuzabazi = ({ prince }) => {
  return (
    <div
      className="princeBuzabazi margin-t-3"
      style={{
        backgroundImage: `url(${prince.image?.childImageSharp?.fluid?.src ??
          '#eaeaea'})`,
      }}>
      <div className="has-text-black">
        <Paragraph
          p={prince.title}
          tag="h2"
          className="is-family-primary has-text-weight-bold"
        />
        <h3 className="is-size-3 has-text-right">{prince.name}</h3>
        <Paragraph className="has-text-right" p={prince.function} />
      </div>
    </div>
  );
};

export default PrinceBuzabazi;
