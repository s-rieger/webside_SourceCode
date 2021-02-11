import React from 'react';

const NavBar = () => {
  return(
    <div className="Nav">
      <button className='Button_One'onClick={function(event){toggleBoxHandler(); filterBoxHandler('r')}}>Toggle Button</button>
      <button className='Button_Two' onClick={() => filterBoxHandler('computersience')}>Filter One</button>
      <button className='Button_Two' onClick={() => filterBoxHandler('artsandcraft')}>Filter Two</button>
    </div> 
  );

}

export default NavBar