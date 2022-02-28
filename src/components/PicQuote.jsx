import React from 'react';
import PropTypes from 'prop-types';
import { PicQuoteStyles } from '../styles/PicQuoteStyles';

function PicQuote({
  pic, alt, quote, imageLeft,
}) {
  return (imageLeft
    ? (
      <PicQuoteStyles>
        <div className="container">
          <div className="pic-quote">
            <img className="pic1" src={pic} alt={alt} />
            <h4 className="quote1">{quote}</h4>
          </div>
        </div>
      </PicQuoteStyles>
    ) : (
      <PicQuoteStyles>
        <div className="container">
          <div className="pic-quote">
            <h4 className="quote2">{quote}</h4>
            <img className="pic2" src={pic} alt={alt} />
          </div>
        </div>
      </PicQuoteStyles>
    )
  );
}

export default PicQuote;

PicQuote.propTypes = {
  pic: PropTypes.string,
  alt: PropTypes.string,
  quote: PropTypes.string,
  imageLeft: PropTypes.bool,
};

PicQuote.defaultProps = {
  pic: 'engagement-party.jpg',
  alt: 'our engagement party',
  quote: '"This is a quote to go next to a nice pic" — Blair',
  imageLeft: true,
};
