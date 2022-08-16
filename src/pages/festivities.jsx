import React from 'react';
import Layout from '../components/Layout';

function FestivitiesPage() {
  return (
    <Layout>
      <h1>Festivities</h1>
      <h3>The Night Before</h3>
      <p>
        Aperitivo at
        {' '}
        <i>TBC</i>
        {' '}
        in central Montalcino. We'll talk timings in a bit.
      </p>
      <h3>The Big Day (Saturday, 10th September)</h3>
      <p>
        <h5>Dress code</h5>
        <p>"Botticelli Chic" (the bride will probably be wearing a white dress and the groom will hopefully be wearing a linen suit and tie if he ever gets around to buying one).</p>
        <p>Once the sun goes down in the evenings it might be quite chilly so bring an extra layer. We will be on grass and cobbles at Antico Convento i Cappuccini for the reception, so stilettos are probably not advisable…</p>
        <h5>Ceremony</h5>
        We will tie the knot at Duomo di Montalcino at 2pm.
        <h5>Reception</h5>
        Food, speeches and dancing at Antico Convento i Cappuccini, eight minutes from the church via minibus.
      </p>
      <h3>The Day After The Big Day</h3>
      <p>
        Pizza, negronis and a pool party for those who can stomach it. 1pm till late, back at Antico Convento i Cappuccini.
      </p>
    </Layout>
  );
}

export default FestivitiesPage;
