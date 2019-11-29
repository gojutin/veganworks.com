import React from "react";
// Components
import { CoverImage } from "../components/common/main-cover";
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { ContactForm } from "../components/common/contact-form";
import { Section } from "../components/common/section";

const Contact = () => {
  return (
    <Layout bg="white">
      <SEO title="Contact VeganWorks" />
      <CoverImage>
        <Section
          bg="rgba(0,0,0,.6)"
          title="Contact Us"
          titleColor="white"
          style={{ minHeight: "100vh" }}
        >
          <div style={{ padding: "10px" }}>
            <ContactForm />
          </div>
        </Section>
      </CoverImage>
    </Layout>
  );
};

export default Contact;
