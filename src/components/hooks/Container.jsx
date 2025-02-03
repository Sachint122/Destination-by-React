import React from 'react';

const Container = ({ heading, paragraph }) => {
  return (
    <section id="container">
      <div className="co-custom-card">
        <div className="co-text-center">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Container;
