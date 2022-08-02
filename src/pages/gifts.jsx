import React from 'react';
import Layout from '../components/Layout';

function GiftsPage() {
  return (
    <Layout>
      <h1>Gifts</h1>
      <p>
        Gifts are absolutely not necessary! But, if you did want to, we have a wedding list
        {' '}
        <a href="https://www.weddingshop.com/Buy/View/111746">here</a>
        —or if you did wish to contribute to our honeymoon or future home,
        money would be hugely appreciated!
      </p>
    </Layout>
  );
}

export default GiftsPage;
