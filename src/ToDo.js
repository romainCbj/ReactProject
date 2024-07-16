import React, { useState } from "react";
import './App.css';
import ReactDOM from 'react-dom/client';


function ToDo() {
    const [taskList, setTaskList] = useState([]);
    function confirmed(e) {
        console.log(e);
        setTaskList(taskList.filter(a=>a.name !== e.name));
    }
    
    function submit(e) {
        if (e.key === 'Enter') {
            setTaskList([
                ...taskList,
                {  name: e.target.value, date :  Date() }
              ]);
         }
       }

    return (
    <div>

        <input type="Text" placeholder="Saisissez une tache" onKeyDown={submit}></input>
        <div>{taskList.length}</div>
        <table>
            <tbody>

            {taskList.length>0 ? taskList.map((task => 
            <tr >
                <td>
                {task.name}
                </td>
           <td>{task.date}</td>
           <td><button onClick={() => confirmed(task)}>OK</button></td>
            </tr>))  : null}

            </tbody>
        </table>

    </div>
    );
}; 

export default ToDo; 
