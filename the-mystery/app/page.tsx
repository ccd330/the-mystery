"use client"; // This line marks the component as a Client Component

import React, { useState } from 'react';

const HomePage = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    setShowLetter(true); // Show the letter when the link is clicked
  };

  return (
    <div className="wrap bg-orange-100">
      <a href="#" className="start" onClick={handleClick}>
        Click to print.
      </a>
      {showLetter && (
        <section className="letter typewriter">
          <h3>Dear Esteemed Guest,</h3>
          <p>
            You are cordially invited to an evening of delectable cuisine and enlightening conversation 
            at my humble abode. The clock strikes seven on the evening of Friday, the 13th, where secrets 
            will be unveiled, and shadows from the past will flicker in the candlelight.
          </p>
          <p>
            Come prepared to discuss matters of great importance that concern us all—affairs of the heart, 
            hidden alliances, and perhaps even the remnants of unspoken truths. Your presence is not merely desired;
            it is essential.
          </p>
          <p>
            Don your finest attire, but remember—some masks hide more than just faces.
          </p>
          <p>
            I eagerly await the pleasure of your company.
          </p>
          <p>
            Yours in anticipation,
          </p>
          <h3>Your Clandestine Host</h3>
        </section>
      )}
    </div>
  );
};

export default HomePage;
