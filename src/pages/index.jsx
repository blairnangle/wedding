import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import PicQuote from '../components/PicQuote';
import Banner from '../components/Banner';
import Layout from '../components/Layout';

function HomePage() {
  const chooseGreeting = () => {
    const greetings = ['Hello.', 'Ciao!', 'Hello there!', 'Bonjourno.', 'What\'s the craic?'];

    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const { picQuotes } = useStaticQuery(graphql`
    {
      picQuotes: allPicQuotesJson(sort: {fields: order, order: ASC}) {
        nodes {
          image {
            childImageSharp {
              fluid(quality: 100) {
                src
              }
            }
          }
          order
          alt
          quote
          imageLeft
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title="Blair & Helena"
      />
      <Layout>
        <Banner
          content={`${(chooseGreeting())} We are getting married.`}
        />
      </Layout>
      {picQuotes.nodes.map((node) => (
        <PicQuote
          alt={node.alt}
          pic={node.image.childImageSharp.fluid.src}
          quote={node.quote}
          imageLeft={node.imageLeft}
        />
      ))}
    </>
  );
}

export default HomePage;
