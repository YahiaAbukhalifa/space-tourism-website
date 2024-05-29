import React from 'react';
import "./Hero.scss"

function Hero() {
  return (
    <section className="hero">
        <div className="container">
            <div className="right child">
                <p>EXPLORE</p>
            </div>
            <div className="left child">
                <div><p className='promo'>SO, YOU WANT TO TRAVEL TO</p><h1>SPACE</h1><p className='des'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p></div>
            </div>
        </div>
    </section>
  )
}

export default Hero