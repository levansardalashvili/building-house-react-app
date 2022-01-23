import React from 'react';
import Propertiesbox from './Propertiesbox';
import house1 from '../images/house1.jpg';
import house2 from '../images/house2.jpg';
import house3 from '../images/house3.jpg';

function Properties() {
  return (
      <div className='product'>
         <div className="p-heading">
             <h3>Properties</h3>
             <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.</p>
         </div>

         <div className="product-container">
              <Propertiesbox  image={house1} price="20000$" />
              <Propertiesbox  image={house2} price="40000$" />
              <Propertiesbox  image={house3} price="50000$" />
         </div>
      </div>
  )
}

export default Properties;
