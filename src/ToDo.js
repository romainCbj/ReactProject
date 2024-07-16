import React, { useState } from "react";
import './App.css';
import ReactDOM from 'react-dom/client';


function ToDo() {
    const [taskList, setTaskList] = useState([]);
    function confirmed(e) {
        setTaskList(taskList.filter(a=>a.name !== e.name));
    }
    
    function submit(e) {
        if (e.key === 'Enter' && e.target.value !=="") {
            setTaskList([
                ...taskList,
                {  name: e.target.value, date :  Date() }
              ]);
         }
       }

    return (
        <div>
            <input type="Text" placeholder="Saisissez une tache" onKeyDown={submit}></input>
            <table>
                <th>tache</th>
                <th>Action</th>
                <tbody>
                    {taskList.length>0 ? taskList.map((task => 
                        <tr >
                            <td>{task.name}</td>
                            <td><button onClick={() => confirmed(task)}>OK</button></td>
                        </tr>))  
                    : null}
                </tbody>
            </table>
        </div>
    );
}; 

export default ToDo; 
