
import React from 'react'
import { Router, Routes, Route, useNavigate } from "react-router-dom";

function handleEmailChange(e)
{
  this.setState({email: e.target.value});
}

function handlePasswordChange(e)
{
  this.setState({password: e.target.value});
}


function Vegas() {

  return (

       <div>Vegas c'est trop bien !</div>

    
  )
}

export default Vegas;
