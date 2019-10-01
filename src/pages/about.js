// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import Image from "./photo-full.jpg";
import "./about.css";

const About = () => {
  const pageTitle = "About me";
  const siteTitle = "Blog by Samuel Omanchi";

  return (
    <Layout title={pageTitle}>
      <Sidebar />
      <Page title={pageTitle}>
        <div
          className="about-div"
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <p
            style={{
              padding: 5,
              textAlign: "left",
              marginRight: 10,
              marginTop: 0
            }}
          >
            Hi my name is Samuel, I'm a front end software developer making use
            of some of modern tools like HTML, CSS3(flexbox for complex layout),
            and JavaScript. Enthusiastic about building modern user interfaces
            with React and React Native for cross platform mobile application
            development. Good working knowledge of NodeJs and the MERN stack.
            Looking to write a bit more. Open to offers too - full time or
            contract. Say Hi!
          </p>

          <div
            className="hire-me"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              style={{
                padding: 10,
                background: "#d2dae2",
                margin: 10,
                color: "#1e272e"
              }}
            >
              Download Resume
            </a>
            <a
              style={{
                padding: 10,
                background: "#d2dae2",
                margin: 10,
                color: "#1e272e"
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </Page>
    </Layout>
  );
};

export default About;
