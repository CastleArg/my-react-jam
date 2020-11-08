import React from 'react';
const Dinosaur = (props) => {
  const myStylez = {
      padding: '15px',
      margin: '15px',
      border: '1px solid'
  }
   return ( <div style={myStylez}> I'm {props.name || 'unknown'},  I eat {props.diet} </div> );
}
 
export default Dinosaur;