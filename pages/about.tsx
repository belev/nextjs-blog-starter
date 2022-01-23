import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import PageInformation from '../components/PageInformation/PageInformation';
import siteConfig from '../siteConfig.json';

const About = () => (
  <Layout>
    <Head>
      <title>About | {siteConfig.siteTitle}</title>
    </Head>

    <PageInformation heading="About">
      <p>About page placeholder</p>
    </PageInformation>
  </Layout>
);

export default About;
