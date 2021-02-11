import React, {useState, useRef, useEffect} from 'react';
//import Collapse from 'reactstrap';
import './App.css';

import BoxBox from './BoxBox';
import SingleBox from './singleBox';
import Bio from './Bio';

import data from './data.json';




function App() {

  const [currentId, setCurrentId] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  // State and Function for showing Single Boxes 
  const [showSingleBox, setShowSingleBox] = useState(false);
  const toggleSingleBoxHandler = (id,skill) => {
    if (currentId === false){
      setShowSingleBox(!showSingleBox)
      setCurrentId(id);
      setCurrentSkill(skill)
    }else {
      setCurrentId(id);
      setCurrentSkill(skill);     
    };
  }
  const toggleSingleBoxHandlerCloser = () => {
    setShowSingleBox(!showSingleBox);
    setCurrentId(false);
    window.scrollTo(0, 0)
  } 

  // State and Function for Skill Boxes
  const [showSkill, setShowBox] = useState(false);
  const toggleSkillBoxHandler = () => {
    setShowBox(!showSkill);

    if (showSingleBox){
      setShowSingleBox(false)
      setCurrentId(false)
    } ;
  }

  // State and Function for Bio
  const [showBio, setshowBio] = useState(false);
  const toggleBioHandler = () => {
      setshowBio(!showBio);     
      window.scrollTo(0, 0)     
    }

  // State and Function for Filtering 
  const [filteredBoxes, setdisplayBoxes] = useState([data]);
  const filterBoxHandler = (props) => {
    const filteredBoxes = data.filter((box) => box.group.includes(props));
    setdisplayBoxes(filteredBoxes);
  }

  //Impressum
  const [showImpress, setshowImpress] = useState(false);
  const toggleImpressum = () => {
    setshowImpress(!showImpress);
  }

  useEffect(() => {
    document.title = "SR";   }, []);

return (
<div className="App_Background">
  <div className="App_Top">  


    {showBio === true ? 
      <Bio/> 
      : 
      null}
    {showSkill === true && showBio === false ? 
      <div style={{height:"200px"}}></div> 
      : 
      null}

    {(showBio === false && showSkill === false && showSingleBox === false) ? 
    <div className="App_Button_Alone" >
      <div className="Nav_Alone">
        <button className='Button_One'
                onClick={function(event)
                  {toggleSkillBoxHandler(); 
                  filterBoxHandler('r')}}>
                                            {showSkill === true ? 'Hide Skills' : 
                                            'Skills'}
                                            </button>
        <button className='Button_One' 
                onClick={function(event)
                {toggleBioHandler()}}>
                                            {showBio === true ? 'Hide Bio' : 
                                            'Bio'}
                                            </button>
      </div>                                              
    </div> : 
    
    <div className="App_Button">
      <div className="Nav">
        <button className='Button_One' 
                onClick={function(event)
                  {toggleSkillBoxHandler(); 
                  filterBoxHandler('r')}}>
                                            {showSkill === true ? 'Hide Skills' : 
                                            'Skills'}
                                            </button>
        <button className='Button_One' autoFocus='True'
                onClick={function(event)
                {toggleBioHandler()}}>
                                            {showBio === true ? 'Hide Bio' : 
                                            'Bio'}
                                            </button>
      </div>                                              
    </div>}

    <div className="App_Lower">

      {showSingleBox === true ?  
      <div className='App_Box'>
        <SingleBox 
          id={currentId}
          skill={currentSkill}
          onClose={toggleSingleBoxHandlerCloser}/>
      </div>: null}
      
      {showSkill === true && showSingleBox === false ?       
        <div>       
                            
          <div className="Nav3">
            <div>
              <h3>Filter Skills</h3>   
            </div>
          
            
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('computersience')}>Programming Languages</button>
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('frWrEn')}>Frameworks and Engines</button>
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('artsandcraft')}>Arts and Craft</button>
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('r')}>All Skills</button>
          </div> 

          <div className="App_Boxes">             
            {filteredBoxes.map((items, index) => 
              <div key={index}>
                <BoxBox
                  onClick={function(event){;
                                          toggleSingleBoxHandler(items.id, items.skill)}}
                  name={items.skill} 
                  currentskill={currentSkill}
                  image={items.picture}
                  key={index}
                  id={items.id}
                />
              </div>)}         
          </div>
           
          <div className="Nav3">
            <div>
              <p>Filter Skills</p>   
            </div>
          

            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('computersience')}>Programming Languages</button>
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('frWrEn')}>Frameworks and Engines</button>
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('artsandcraft')}>Arts and Craft</button>
            <button className='Button_Two' 
                    onClick={(ev) => filterBoxHandler('r')}>All Skills</button>
          </div> 

        </div> : null}

        <div className="footer">
            <button className="Button_Two"
                    onClick={(ev) => toggleImpressum()}>Impressum</button>

          {showImpress === true ? 
          <div className="Impressum">
            <p>Sebastian Rieger//rieger.geo@gmail.com//24118 Kiel</p>
          </div>:null}
        </div>          
    </div>  
  </div>
</div>
);
}

export default App;
