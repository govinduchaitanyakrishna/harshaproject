import React from 'react';
import './HomeStyles.css';
import ContactBanner from './ContactBanner';


function Home() {
  return (
    <>
      <div className="welcome-container">
        <h1>Welcome to My WaterMap</h1>
      </div>
      <ContactBanner />
    </>
  );
}

export default Home;
