import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Section from "../section";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FavoriteBrandsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/brands/*/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Section
      title="Bringing you our favorite brands"
      bg={`linear-gradient(
      to bottom,
      white,
      #cfdef3);`}
    >
      <Wrapper>
        {data.allFile.edges.map(({ node }, i) => {
          return (
            <Img
              key={i}
              fixed={node.childImageSharp.fixed}
              css={`
                margin: 50px;
              `}
            />
          );
        })}
      </Wrapper>
    </Section>
  );
};

export default FavoriteBrandsSection;