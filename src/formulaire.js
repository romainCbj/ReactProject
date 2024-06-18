import './App.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Methodes from './Methode';

const Formulaire = () => { 


  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName:"",
    telephone:"",
    errorMessage:"",
    errors: {},
    age: 30

  });

  let MessageSuccess = "";

  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('http://localhost:5118/Form')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
    }, []);


    let errorMessage = "";

    function CheckIfNumberPhoneIsValid(e){
      const value = e.target.value;
      console.log(value.length);


    }

    function CheckIfIsNUmber(e){
      const value = e.target.value;
      if(isNaN(+value)){
        formData.errorMessage = "Ne Saisissez que des chiffres";
        
      }
      else if(value.length > 10){
        formData.errorMessage = "Pas plus de 10 chiffres";
      }
      else{
        formData.errorMessage = "";
      }
    }
  
    function Submit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
  
      const message = "Username : " + formData.username +". Téléphone : "+formData.telephone+ "."
      alert (message);
  
    }
  

  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
  
    };
  
    const validateForm = () => {
      const errors = {};
  
      if (!formData.telephone) {
        console.log("phone");
        errors.telephone = "Telephone is required";
      }
      else 
      {
        if (formData.telephone.length != 10){
          errors.telephone = "Un numéro de téléphone est composé de 10 chiffres";
        }
      }
      if (!formData.username) {
        console.log("username")
        errors.username = "Username is required";
      }
  
  
      setFormData((prevState) => ({ ...prevState, errors }));
  
  
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        console.log(formData);


        const test = {
          Name: formData.username,
          Telephone : formData.telephone,
          Age : formData.age
        };

        axios.post(`http://localhost:5118/Form`,  test )
        .then(res => {
          console.log(res);
          if(res.data == true)
          {
              alert (test.username + " a " + test.Age + " ans")
             
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
<label>{}</label>
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
          Telephone:
  
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={e => { CheckIfIsNUmber(e); handleChange(e) }}
            onBlur = {CheckIfNumberPhoneIsValid}
  
            
          />
          {formData.errors.telephone && (
            <p style={{ color: "red" }}>{formData.errors.telephone}</p>
          )}
                  </label>
         <p style={{ color: "red" }}>{formData.errorMessage}</p>
        </div>
        </div>
       
        <div>
        <button type ="submit" value = "submit" name="FrmButton" onClick={Methodes.Alerte}>OK </button>
        </div>
        
        <h1>{formData.username }</h1>
        <h1>test {MessageSuccess}</h1>
        

      </form>
  
    );
  }
      
    export default Formulaire; 
