import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <div>
        <Helmet>
          <title>Richard Senyo Gadasu Portfolio</title>
          <meta name="description" content="Built by Richard Senyo Gadasu" />
        </Helmet>
      </div>
      <div>
        <h1 className="text-center">
          From one line of code, poised to reshape the world's digital landscape!
        </h1>
        <br />
      </div>
    </>
  );
}
