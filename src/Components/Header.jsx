import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
  <div className='header'>
       <Navbar />
       <div className='intro'>
           
           <h1><span>Buy </span>And<span> Sell</span> Properties</h1>
           <p className='details'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt vitae
                facere accusamus inventore magnam sint quo voluptates sed blanditiis. Enim modi
                 neque numquam non pariatur, itaque inventore magnam et.
           </p>
           <a href='#' className='header-btn'>Details</a>
       </div>
  </div>

  );
}

export default Header;
