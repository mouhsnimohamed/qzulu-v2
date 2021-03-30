import React from 'react';

const OurFirstProject = ({ items, title, isLight }) => {
  return (
    <div
      className={`OurFirstProject margin-t-3 ${
        isLight ? 'has-background-white' : 'has-background-black'
      }`}>
      <div className="container">
        <h1
          className={`primary-title margin-b-2 is-size-2 has-text-weight-light has-text-centered is-family-primary ${
            isLight ? 'has-text-black' : 'has-text-white'
          }`}>
          {title}
        </h1>
        <div className="columns">
          {items.map((item) => (
            <div className="column" key={item.text}>
              <div
                className={`project-item ${
                  isLight ? 'has-background-grey-light' : 'has-background-grey'
                }`}>
                <img
                  src={item.image.childImageSharp.fluid.src}
                  alt={item.text}
                />
                <p className="text has-text-white">
                  {item.text}
                  <br />
                  <a className="has-text-left" href={item.link}>
                    MORE
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFirstProject;
