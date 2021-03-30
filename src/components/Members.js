import React from 'react';

import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Paragraph from './Paragraph';

const Members = ({ leadership }) => {
  return (
    <div>
      <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold	has-text-centered is-family-primary has-text-primary">
        OUR LEADERSHIP
      </h1>
      <div className="team-members">
        {leadership.members.map((member) => (
          <div className="member" key={member.name}>
            <div className="profile">
              <PreviewCompatibleImage
                style={{
                  maxHeight: '180px',
                  maxWidth: '180px',
                  height: '100%',
                  borderRadius: '50%',
                }}
                imageInfo={member}
              />
            </div>
            <div className="details">
              <div className="columns">
                <div className="img column is-4">
                  <PreviewCompatibleImage
                    style={{
                      height: '270px',
                      width: '270px',
                      // width: '70%',
                      borderRadius: '50%',
                      margin: 'auto',
                    }}
                    imageInfo={member}
                  />
                </div>
                <div className="team-heading column">
                  <div className="name">
                    <h4 className="is-uppercase is-size-5 has-text-black">
                      {member.name}
                    </h4>
                    <h5 className="is-capitalized is-size-6 has-text-primary">
                      {member.function}
                    </h5>
                  </div>
                  <div className="text">
                    <Paragraph p={member.bio} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="costum-p has-text-centered">
        <Paragraph p={leadership.description} />
      </div>
    </div>
  );
};

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default Members;
