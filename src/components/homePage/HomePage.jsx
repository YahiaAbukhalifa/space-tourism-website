import React from 'react';
import "./HomePage.scss"
import Header from '../header/Header';
import Hero from './Hero';
function HomePage() {
  return (
    <>
        <div className="homePage">
          <Header />
          <Hero/>
        </div>
    </>
  )
}

export default HomePage