import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import OurFirstProject from '../components/OurFirstProject';
import Paragraph from '../components/Paragraph';
import Banner from '../components/Banner';
import MainPartners from '../components/MainPartners';

export const OurProjectsPageTemplate = ({
  title,
  image,
  introduction,
  ourFirstProject,
  ourSecondProject,
}) => {
  return (
    <div>
      <Banner banner={image} title={title} />
      <section className="section section--gradient">
        <div className="container mb-2">
          <h1 className="primary-title margin-b-2 margin-t-2 is-size-1 is-uppercase	has-text-weight-bold	has-text-centered is-family-primary has-text-primary">
            INTRODUCING
          </h1>
          <Paragraph p={introduction} />
          <OurFirstProject title="OUR FIRST PROJECTS" items={ourFirstProject} />
          <OurFirstProject
            isLight={true}
            title="OUR SECOND PHASE PROJECTS"
            items={ourSecondProject}
          />
          <MainPartners />
        </div>
      </section>
    </div>
  );
};

OurProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ourFirstProject: PropTypes.array,
  ourSecondProject: PropTypes.array,
};

const OurProjectsPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  return (
    <Layout>
      <OurProjectsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        introduction={frontmatter.introduction}
        ourFirstProject={frontmatter.ourFirstProject}
        ourSecondProject={frontmatter.ourSecondProject}
      />
    </Layout>
  );
};

OurProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OurProjectsPage;

export const ourProjectsQuery = graphql`
  query ourProjects($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        introduction
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
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
        ourSecondProject {
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
      }
    }
  }
`;
