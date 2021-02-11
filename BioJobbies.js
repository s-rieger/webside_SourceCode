import React, {useState} from 'react';

const BioJobbies = ({data}) =>{


  const [isJobbiOpen, setIsJobbiOpen] = useState(false)
  const toggleIsJobbiOpen = () => {
    setIsJobbiOpen(!isJobbiOpen);
  }

  return(
    <tr>
      <td style={{textAlign: 'right'}}>{data[0][1]} </td>           
      <td onClick={toggleIsJobbiOpen}>{data[0][0]} </td>
        {isJobbiOpen ? 
        <td className='TableFlip' style={{textAlign: 'left'}}>{data[1]} </td> :null }
    </tr>  
  )
};

export default BioJobbies