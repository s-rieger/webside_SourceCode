import React from 'react';


import projectdata from './projects.json';

const SingleProject = ({id}) => {

  const content = projectdata[id];

  return (
    <div className="SingleProject">
      <div  className="displayBlock">
        <h2>{content.ProjectName}</h2> 
      </div>
      <hr></hr>
      <p>{content.Descibtion}</p>

      {content.DataSetLink ? 
      <a href={content.DataSetLink}
      target="_blank"
      rel="noopener noreferrer">
      Link to Dataset</a>
      : null }

      <div className="ProjectImages">
        {content.Images.map((item,index) => 
          <img key={index} className="ExampleImages" src={`${item}`}></img>
        )}
      </div>
      
      {content.GithubLink ? 
      <a href={content.GithubLink} target="_blank" rel="noopener noreferrer">Link to Github</a>
      :null}
      

      {content.OtherLink ? 
      <a href={content.OtherLink}
      target="_blank"
      rel="noopener noreferrer">
      Click here to Open</a>
      : null }
    </div>
  )
};

export default SingleProject