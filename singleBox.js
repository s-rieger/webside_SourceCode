import React, {useState} from 'react';
import onClickOutside from "react-onclickoutside";


import data from './data.json';
import projects from './projects.json';
import SingleProject from './singleProject';
import skill_describtion from "./skill_describtion.json";


const SingleBox = ({id,skill,onClose}) => {

  const content = data[id];

  const cskill = skill;
  const skillDes = skill_describtion;

  const currentskill = skillDes.cskill;



  const projectdisplay = projects.filter((item) => item.Skill.includes(`${skill}`));

  const [showSingleProject, setShowSingleProject] = useState(false);

  const [currentProjectId, setcurrentProjectId] = useState(false);
  const switchcurrentProjectId = (id) =>{
    setcurrentProjectId(id)
  }

  const toggleShowSingleProject = () => {
    
    if (Number.isInteger(currentProjectId)){
      setShowSingleProject(showSingleProject)
    } else {
    setShowSingleProject(!showSingleProject);
    }
  }

  

 return (
  <div className='SingleBoxContainer'>
    <div className="SingleBox">        
      
      <div className="SingleBoxProjects">
        

      {/* {console.log(cskill)}
      {console.log(skillDes[skillDes.findIndex(items => items.type === cskill)].desc)}
      {console.log([skillDes.findIndex(items => items.type === cskill)])}   */}
     
      <div className="Button_Project"> {/* Selection Box */}
      {/*<span style={{textAlign:"center"}}><h2>{content.skill}</h2></span>*/}
      <img className="SkillLogo1" src={`${content.picture}`}></img>
      <h4>Projects:</h4>
      {projectdisplay.map((items, index) => 
        <div key={index}>
          <button className="Button_Timeline_Info" 
                  onClick={function(event)
                    {toggleShowSingleProject();
                      switchcurrentProjectId(items.ProjectId)}}>
                  {items.ProjectName}
          </button>
        </div>
        )}
        
        </div>

                      <hr></hr>

        {showSingleProject == true ? <SingleProject 
            id={currentProjectId}/> : 
            <div>
              <h2>{skillDes[skillDes.findIndex(items => items.type === cskill)].title}</h2>

              <ul style={{ paddingLeft:"30%"}}>{skillDes[skillDes.findIndex(items => items.type === cskill)].desc.map((items, index) => 
                <li key={index} style={{textAlign:"left"}}>{items}</li>)}</ul>


            </div>}
        
            <hr></hr>
            <button onClick={onClose} className="Button_Timeline_Info">Return to Collection</button>
      </div>

    
      
    </div>

  
  
  
    {/*console.log(data[props].skill)*/}
    
  </div>
  )
};



export default SingleBox