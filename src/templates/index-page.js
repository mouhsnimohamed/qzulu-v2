import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Introducing from '../components/Introducing';
import WhatWeDo from '../components/WhatWeDo';
import OurFirstProject from '../components/OurFirstProject';
import PrinceBuzabazi from '../components/PrinceBuzabazi';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import MainPartners from '../components/MainPartners';

export const IndexPageTemplate = ({
  image,
  title,
  intro,
  whatwedo,
  ourFirstProject,
  mainPartners,
  princeBuzabazi,
}) => (
  <div>
    <Banner banner={image} title={title} />
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Introducing items={intro} />
            <div className="devider" />
            <WhatWeDo items={whatwedo} />
          </div>
        </div>
      </div>
    </section>
    <OurFirstProject
      title="OUR FIRST PROJECTS and DEVELOPMENT"
      items={ourFirstProject}
    />
    <div className="container">
      <MainPartners />
      <PrinceBuzabazi prince={princeBuzabazi} />
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  whatwedo: PropTypes.array,
  intro: PropTypes.array,
  ourFirstProject: PropTypes.array,
  mainPartners: PropTypes.object,
  princeBuzabazi: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        intro={frontmatter.intro}
        whatwedo={frontmatter.whatwedo}
        ourFirstProject={frontmatter.ourFirstProject}
        mainPartners={frontmatter.mainPartners}
        princeBuzabazi={frontmatter.prince}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          text
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        whatwedo {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        ourFirstProject {
          text
          link
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainPartners {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        prince {
          function
          name
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
