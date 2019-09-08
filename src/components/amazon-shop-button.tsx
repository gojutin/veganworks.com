import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

const Button = styled(motion.button)<{ theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-width: 200px;
  background: rgba(71, 138, 240, 0.1);
  border: 2px solid #333;
  font-size: 20px;
  margin: 10px auto;
  cursor: pointer;
  box-shadow: none;
  padding: 5px 18px;
  outline: none;
  color: #333;
`;

const A = styled.a`
  text-decoration: none;
`;

type AmazonButtonProps = {
  url: string;
  isAvailable: boolean;
};

const AmazonButton: React.FC<AmazonButtonProps> = ({ url, isAvailable }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "amazon-logo-black.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const imageData = data.file.childImageSharp.fixed;

  const animateSettings = {
    boxShadow: "0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.1)",
    scale: 1.02,
  };
  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      <Button whileHover={animateSettings} whileTap={animateSettings}>
        <Img fixed={imageData} alt="Amazon Logo" />

        <span
          css={`
            margin-left: 10px;
          `}
        >
          {isAvailable ? "Shop Now!" : "View on Amazon"}
        </span>
      </Button>
    </A>
  );
};

export default AmazonButton;
