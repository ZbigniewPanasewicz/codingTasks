import React from 'react';
import Figure from 'react-bootstrap/Figure';
import logo from '../logo.png';
import shop1 from '../shop-entry.jpg';
import shop2 from '../inside-shop.jpg';
import '../App.css';

export default function About() {
  return (
    // Main About container with flexbox layout
    <div className="about-container">

      {/* About Section Title */}
      <h2>About</h2>
      <hr />

      {/* Content Row - Holds the logo and text side-by-side */}
      <div className="content-row">
        {/* Logo Container */}
        <Figure>
          <Figure.Image width={300} height={300} alt="Logo" src={logo} /> 
        </Figure>

        {/* Text Container */}
        <div className="text-container">
          <h2>Welcome to the Dirty Socks Emporium!</h2>
          <p>
            <b>Dirty Socks Shop</b> – your one-stop shop for the most exclusive collection of pre-loved, aromatic foot garments!
          </p>
          <p>
            Tired of boring, fresh socks? Craving something with a little more <i>character</i>? Look no further! Our socks have a story to tell. Each pair has witnessed countless adventures, marathons, and maybe a few (hundred) missteps into puddles. 
          </p>

          <h3>Why choose our Dirty Socks?</h3>

          <ul>
            <li><b>Authenticity:</b> Each sock guarantees a real human experience. They've seen the world!</li>
            <li><b>Uniqueness:</b> Just like fingerprints, no two socks are alike. Unique patterns, holes, and scents make each pair a collector's item.</li>
            <li><b>Aroma:</b> Forget those generic new sock smells! Our socks boast a rich, mature bouquet that's sure to make a lasting impression.</li>
          </ul>

          <p>
            Ditch the ordinary and embrace the extraordinary! Come on down and grab a pair (or two) of our finest dirty socks. They're not just socks; they're conversation starters, foot-warmers, and a testament to a life well-lived.
          </p>

          <hr /> 

          {/* Contact Information Section */}
          <p>Contact us: <a href='mailto: info@dirtysocksshop.stink'>info@dirtysocksshop.stink</a></p> 
        </div>
      </div>

      {/* Image Gallery */}
      <div className="about-image">
        <img src={shop1} alt="Shop Entry" />
        <img src={shop2} alt="Inside Shop" />
      </div>
    </div>
  );
}
