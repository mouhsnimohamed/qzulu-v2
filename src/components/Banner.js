import React from 'react';

const Banner = ({ banner, title }) => {
  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!banner.childImageSharp ? banner.childImageSharp.fluid.src : banner
        })`,
        backgroundSize: `100% 100%`,
      }}>
      {title && (
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}>
          <h1 className="is-size-1 intro-title intro-inline">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
