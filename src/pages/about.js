// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import Image from "./photo-full.jpg";

const About = () => {
  const pageTitle = "About me";
  const siteTitle = "Blog by Samuel Omanchi";

  return (
    <Layout title={pageTitle}>
      <Sidebar />
      <Page title={pageTitle}>
        <div
          style={{
            display: "flex"
          }}
        >
          <div>
            <p style={{ padding: 5 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              sequi impedit facere aut debitis tenetur voluptatum possimus
              mollitia molestias. Veniam doloribus et ipsum amet enim quis
              veritatis eligendi dolorum vel? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eius cum dolores dolor error commodi
              amet ipsum quod quae, corrupti quam dolorem nihil blanditiis
              similique quia officiis minima omnis inventore itaque.
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
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
          <img
            src={Image}
            alt="Samuel Omanchi"
            height="350"
            width="350"
            style={{ borderRadius: 5 }}
          />
        </div>
      </Page>
    </Layout>
  );
};

export default About;
