// this is the "/" page

import * as React from "react";
import Layout from "../components/layouts/Layout";
import Section from "../components/layouts/Section";
import BackedBy from "../components/sections/BackedBy";
import Hero from "../components/sections/Hero";

const IndexPage = () => (
  <Layout>
    <Hero
      title="Lorem ipsum dolor sit amet"
      subtitle="Consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
      image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
      ctaText="Contact us"
      ctaLink="/contact"
    />
    <BackedBy />
  </Layout>
);

export default IndexPage;
