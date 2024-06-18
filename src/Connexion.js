import './App.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { Route, Routes, useNavigate } from "react-router-dom";



const Connexion = () => { 

   
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        errors: {},
      });
    

      const validateForm = () => {
        const errors = {};
    
        if (!formData.username) {
          errors.username = "Username is required";
        }

        if (!formData.password) {
            errors.password = "Password is required";
          }

          setFormData((prevState) => ({ ...prevState, errors }));
  
  
          return Object.keys(errors).length === 0;
      }

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    
      };


      const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          console.log(formData);
  
  
          const logins = {
            Login: formData.username,
            Password : formData.password,

          };
  
          axios.post(`http://localhost:5118/Connexion`,  logins )
          .then(res => {
            console.log(res);
            if(res.data == true)
            {
                alert(logins.password);
               
            }
            console.log(res);
            console.log(res.data);
          }
        )
        .catch(error => {
          console.log(error.message);
        })
        } else {
            
        }
      };

    return (
        <form onSubmit={handleSubmit}>
          <div>

          <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          
            
          />
          {formData.errors.username && (
            <p style={{ color: "red" }}>{formData.errors.username}</p>
          )}
        </label>
        <div>
        <label>
            password:
    
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}

              
            />
            
            </label>
            {formData.errors.password && (
            <p style={{ color: "red" }}>{formData.errors.password}</p>
          )}
          </div>
          </div>
         
          <div>
          <button type ="submit" value = "submit" name="FrmButton">OK </button>
          </div>

        </form>
    
      );
}
      
export default Connexion; 
