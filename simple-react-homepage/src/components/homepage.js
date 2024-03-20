import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
//import Carousel from '../react-carousel-demo/src/Carousel.js';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                <b><h3>AuctionEase</h3></b>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Bid
                        </li>
                        <li>
                            Profile
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
    )
  }
/*function App() {
    const images = [
      'https://via.placeholder.com/800x400/ff5733/fff',
      'https://via.placeholder.com/800x400/33ff57/fff',
      'https://via.placeholder.com/800x400/5733ff/fff',
    ];
    return (
      <div className="App">
        <h1>Simple React Carousel</h1>
        <Carousel images={images} />
      </div>
    );
  }*/
const HomePage = () => {
  return (
    <div>
      <header>
        {Navbar()}
      </header>
      <main>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </main>
    </div>
  );
}

export default HomePage;