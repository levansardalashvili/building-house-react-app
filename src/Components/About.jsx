import React from 'react';
import Aboutimg from '../images/navbar-bg.jpg'

function About() {
  return (
      <div className="about">
          <div className="about-model">
              <img src={Aboutimg} alt='' />
          </div>
          <div className="about-text">
              <h2>we are the best company</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste! Enim quis
             odio eligendi fugiat nesciunt! Quia, sequi blanditiis! Quos laborum autem corporis quasi
              labore nisi eveniet repellat ipsam saepe!</p>
              <button>More Details</button>
          </div>
      </div>
  )
}

export default About;
