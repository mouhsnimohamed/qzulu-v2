import React from 'react';
import Paragraph from './Paragraph';

const Founder = ({ quantumNation }) => {
  return (
    <div className="quantumNation">
      <Paragraph
        before="“"
        after="”"
        tag="h2"
        className="is-size-2 has-text-centered has-text-white"
        p={quantumNation.text}
      />
      <Paragraph
        className="is-size-3 has-text-right has-text-white"
        p={quantumNation.founder}
      />
    </div>
  );
};

export default Founder;
