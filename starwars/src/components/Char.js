import React from 'react';
import './StarWars.css'

const charClassHandler = (role) => {
  let color;
  switch(role) {
    case 'hero':
      color = ' blue';
      break;
    case 'villain':
      color = ' red';
      break;
    case 'droid':
      color = ' silver';
      break;
    case 'neutral':
      color = ' yellow';
      break;
    default: 
      color = '';
      break;
  }

  return (
    'character' + color
  )
}

function Char(props) {
  return (
    <div className={charClassHandler(props.role)}>
      <h1>{props.name}</h1>
      <p>Born: {props.birth_year}</p>
      <p>Eyes: {props.eye_color}</p>
      <p>Hair: {props.hair_color}</p>
    </div>
  )
}

export default Char;