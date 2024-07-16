
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
      <tr>
        <td>
          <b>{person.name}:</b>
      
        </td>
      </tr>
    );
  
  return (
    <body>
      <div class="Starwars">
      <h1>Liste des Jedis</h1>
      <table>
        
          {listItems}
        
      </table>
      
    </div>
    </body>
    
  );
}

export default Starwars;