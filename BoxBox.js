import React from 'react';
import SingleBox from './singleBox';

const BoxBox = (props) => {
  return (
      <div className="BoxBoxBox" 
           onClick={props.onClick}>
          <img className="SkillLogo1" src={`${props.image}`}/>  
          <h3>{props.name}</h3>    
      </div>
    )
};

export default BoxBox

