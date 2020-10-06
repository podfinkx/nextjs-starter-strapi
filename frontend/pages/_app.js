import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../libs/apollo';

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Strapi website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
