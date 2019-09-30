// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import Slider from "../components/Slider";

const About = () => {
  const pageTitle = "Projects";
  const siteTitle = "Blog by Samuel Omanchi";

  const slideData = [
    {
      index: 0,
      headline: "Liberty Therapies",
      button: "View Project",
      src:
        "https://res.cloudinary.com/cortehz/image/upload/v1569840419/samuelomanchi.com/lib.png"
    },
    {
      index: 1,
      headline: "At Peace Centre",
      button: "View Project",
      src:
        "https://res.cloudinary.com/cortehz/image/upload/v1569842037/samuelomanchi.com/at.png"
    },
    {
      index: 2,
      headline: "Budget App UI",
      button: "View Project",
      src:
        "https://res.cloudinary.com/cortehz/image/upload/v1569842212/samuelomanchi.com/budg.png"
    },
    {
      index: 3,
      headline: "Hassan A. Saleh",
      button: "View Project",
      src:
        "https://res.cloudinary.com/cortehz/image/upload/v1569841041/samuelomanchi.com/hon.png"
    }
  ];

  return (
    <Layout title={pageTitle}>
      <Sidebar style={{ zIndex: 20000 }} />
      <Page title={pageTitle}>
        <Slider heading="Example Slider" slides={slideData} />
      </Page>
    </Layout>
  );
};

export default About;
