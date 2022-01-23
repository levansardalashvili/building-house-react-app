import React from 'react';
import Agentbox from './Agentbox';
import agent1 from '../images/agent1.jpg';
import agent2 from '../images/agent2.jpg';
import agent3 from '../images/agent3.jpg';

function Agent() {
  return (
      <div className='agent'>
          <div className="a-heading">
              <h1>AGENTS</h1>
              <p>Best Agents</p>
          </div>
          <div className='b-container'>
              <Agentbox image={agent1} name='George' />
              <Agentbox image={agent2} name='Joe' />
              <Agentbox image={agent3} name='Lile' />
          </div>
      </div>
  )
}

export default Agent;
