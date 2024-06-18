
import './App.css';
import React, { useEffect, useState } from 'react'; 

console.log("Drag drop "  + new Date().toString());

const Starwars = () => { 
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
    }, []);
    const people =posts.results
    console.log(people)
    const listItems = people?.map(person =>
      <li>
        <p>
          <b>{person.name}:</b>
      
        </p>
      </li>
    );
  
  return (
    <body>
      <div className="Starwars">
      <h1>Liste des Jedis</h1>

      <ul>
        {listItems}
      </ul>;

      
    </div>
    </body>
    
  );
}

export default Starwars;