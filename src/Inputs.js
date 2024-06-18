import React, { useState } from "react";
import './App.css';



function Inputs() {
  const [num, setNum] = useState(0); 
  const handleClick = () => { 
      setNum(num + 1); 
  }; 
  
  return ( 
      <div className="Formulaire" > 
          <h2> {num}</h2> 
          <button  onClick={handleClick}> 
              Add one 
          </button> 

  
      </div> 
  ); 
}; 

export default Inputs; 
