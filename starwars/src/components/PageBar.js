import React from 'react';
import './StarWars.css'

const makePageBar = (props) => {
  for (let i = 1; i <= props.totalPages; i++) {
    return (
      <div id={i} onClick={() => {props.pageChange(i)}}>{i}</div>
    )
  }
}

componentDid

function PageBar(props) {
  return (
    <div className="page-bar">
      <div onClick={() => {props.pageBack()}}>{"<"}</div>
      {makePageBar(props)}
      <div onClick={() => {props.pageForward()}}>{">"}</div>
    </div>
  )
}

export default PageBar;