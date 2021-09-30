import React from 'react';

//AAAAAAAAAAAA
// TESTE DNV com alteração do merge

const AppCardBullets = ({date, bullets}) => (
  <div>
    <hr /> 
    <h5>{date}</h5>
    <ul>
      {
        bullets.map((bullet, index) => (
          <li key={index}>
            <strong>{bullet.type}</strong> - {bullet.title}
          </li>
        ))
      }
    </ul>
    <hr /> 
  </div>
);

export default AppCardBullets;