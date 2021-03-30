import React from 'react';
import Paragraph from './Paragraph';

const StrategicPartnership = ({
  items: { paragraph_1, paragraph_2, paragraph_3 },
}) => {
  return (
    <div>
      <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold	has-text-centered is-family-primary has-text-primary">
        THE STRATEGIC PARTNERSHIP
      </h1>
      <div className="strategicPartnership columns  is-space-between">
        <div className="column">
          <Paragraph p={paragraph_1} />
        </div>
        <div className="column">
          <Paragraph p={paragraph_2} />
        </div>
        <div className="column">
          <Paragraph p={paragraph_3} />
        </div>
      </div>
    </div>
  );
};

export default StrategicPartnership;
