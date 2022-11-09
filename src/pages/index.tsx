// this is the "/" page

import * as React from "react";
import Layout from "../components/layouts/Layout";
import Section from "../components/layouts/Section";
import Hero from "../components/sections/Hero";

const IndexPage = () => (
  <Layout>
    <Hero
      title="The data pipeline whatever etc startup from your mom"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
      image="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
      ctaText="Contact us"
      ctaLink="/contact"
    />
  </Layout>
);

export default IndexPage;
