import React from 'react';
import Char from './Char'
import './StarWars.css'

const heroList = [
  'Luke Skywalker', 'Leia Organa', 'Biggs Darklighter',
]
const villainList = [
  'Darth Vader',
]
const droidList = [
  'C-3PO', 'R2-D2', 'R5-D4',
]
const neutralList = [
  'Owen Lars', 'Beru Whitesun lars',
]

const roleHandler = (name) => {
  if (heroList.includes(name)){
    return 'hero'
  }
  else if (villainList.includes(name)){
    return 'villain'
  }
  else if (droidList.includes(name)){
    return 'droid'
  }
  else if (neutralList.includes(name)){
    return 'neutral'
  }
  else {
    return 'neutral'
  }
}

function CharList(props) {
  return (
    <div className='character-list'>
      {props.charArray.map(item => {
        return (
          <Char 
            name={item.name}
            birth_year={item.birth_year}
            eye_color={item.eye_color}
            hair_color={item.hair_color}
            role={roleHandler(item.name)}
          />
        )
      })}
    </div>
  )
}

export default CharList;