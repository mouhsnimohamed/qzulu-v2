import React, { Fragment } from 'react';
import urlify from './Helpers';

const ItemsList = ({ items }) => {
  if (items) {
    return (
      <ul className="squar-items">
        {items.split('\n').map((item, key) => {
          return (
            <Fragment key={key}>
              {item && (
                <li>
                  <p dangerouslySetInnerHTML={{ __html: urlify(item) }} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default ItemsList;
