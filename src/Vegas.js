
import React from 'react'
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';

function Vegas() {

  return (

       <div>
        <div class='Retour'>
        <a href="/Home">Retour</a>
        </div>
        <div class='Texte'>
        Vegas c'est trop bien !
        </div>
            <Routes>
              <Route path="/Home" element={<Home />}/>
            </Routes>
        
        
        </div>

    
  )
}

export default Vegas;
