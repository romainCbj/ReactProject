import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import App from './App';
import DragDrop from './DragDrop';
import Formulaire from './formulaire';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inputs from './Inputs';
import Vegas from './Vegas';
import LosAngeles from './LosAngeles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Router>
      <Routes>
          <Route path="/Home" element = {<Home />}>   </Route>
          <Route path="/DragDrop" element = {<DragDrop />}>   </Route>
          <Route path="/Formulaire" element = {<Formulaire />}>   </Route>
          <Route path="/Inputs" element = {<Inputs />}>    </Route>
          <Route path="/Vegas" element = {<Vegas />}>    </Route>
          <Route path="/LosAngeles" element = {<LosAngeles />}>    </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
