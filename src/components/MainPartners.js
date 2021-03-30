import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const MainPartners = ({ mainPartners }) => {
  return (
    <>
      <h1 className="margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold has-text-centered is-family-primary has-text-primary">
        PARTNERS
      </h1>
      <div className="mainPartners margin-b-3">
        <PreviewCompatibleImage imageInfo={{ image: mainPartners }} />
        <Link
          to="/partners"
          className="more-partners is-uppercase has-text-weight-light is-family-primary has-text-white has-background-primary has-text-centered">
          FIND OUT MORE ABOUT OUR PARTNERS
        </Link>
      </div>
    </>
  );
};

MainPartners.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query MainPartnersQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            mainPartners {
              childImageSharp {
                fluid(maxWidth: 1500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <MainPartners
        mainPartners={data.markdownRemark.frontmatter.mainPartners}
      />
    )}
  />
);
