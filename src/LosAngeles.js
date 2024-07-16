
import React from 'react'
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';
import './Home.css';

function LosAngeles() {

  return (

       <div>
        <div class="Retour">
        <a href="/Home">Retour</a>
        </div>
        
            <Routes>
              <Route path="/Home" element={<Home />}/>s
            </Routes>
        <div class='Texte'>
        Los Angeles c'est clairement surcoté...
        </div>

        
        </div>

    
  )
}

export default LosAngeles;
