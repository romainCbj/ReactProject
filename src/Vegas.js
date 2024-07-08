
import React from 'react'
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';

function Vegas() {

  return (

       <div>
        <div>
        <a href="/Home">Retour</a>
        </div>
        
            <Routes>
              <Route path="/Home" element={<Home />}/>
            
            </Routes>
        Vegas c'est trop bien !
        
        </div>

    
  )
}

export default Vegas;
