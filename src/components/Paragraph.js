import React, { Fragment } from 'react';

const Paragraph = ({ p, tag = 'p', before, after, ...rest }) => {
  const Tag = tag;
  const elements = p.split('\n');
  if (p) {
    return (
      <Tag {...rest}>
        {before && <span className="before">{before}</span>}
        {elements.map((item, key) => {
          return (
            <Fragment key={key}>
              {item}
              {key !== elements.length - 1 && <br />}
            </Fragment>
          );
        })}
        {after && <span className="after">{after}</span>}
      </Tag>
    );
  }
  return null;
};

export default Paragraph;
