import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import StrategicPartnership from '../components/StrategicPartnership';
import OurValues from '../components/OurValues';
import Gratitude from '../components/Gratitude';
import Members from '../components/Members';
import Founder from '../components/Founder';

export const AboutPageTemplate = ({
  title,
  image,
  strategicPartnership,
  ourValues,
  leadership,
  gratitude,
  quantumNation,
}) => {
  return (
    <div>
      <Banner banner={image} title={title} />
      <section className="section section--gradient">
        <div className="container mb-2">
          <StrategicPartnership items={strategicPartnership} />
          <div className="devider" />
          <OurValues values={ourValues} />
          <Members leadership={leadership} />
          <Gratitude gratitude={gratitude} />
          <Founder quantumNation={quantumNation} />
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  strategicPartnership: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ourValues: PropTypes.object,
  leadership: PropTypes.object,
  quantumNation: PropTypes.object,
  gratitude: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        strategicPartnership={frontmatter.strategicPartnership}
        ourValues={frontmatter.ourValues}
        leadership={frontmatter.leadership}
        gratitude={frontmatter.gratitude}
        quantumNation={frontmatter.quantumNation}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        strategicPartnership {
          paragraph_1
          paragraph_2
          paragraph_3
        }
        ourValues {
          intro
          valuesList {
            title
            text
          }
        }
        leadership {
          description
          members {
            image {
              childImageSharp {
                fluid(maxWidth: 450, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            function
            bio
          }
        }
        gratitude {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        quantumNation {
          text
          founder
        }
      }
    }
  }
`;
