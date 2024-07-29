import React, { useState } from "react";
import './App.css';

function ToDo() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const onInput = (e) => setTask(e.target.value);
    function confirmed(e) {
        setTaskList(taskList.filter(a=>a.name !== e.name));
    }
    
    function submit(e) {
        if (e.key === 'Enter' && e.target.value !=="") {
            if(taskList.filter(f=>f.name === e.target.value).length > 0)
            {

            }
            else
            {
                setTaskList([
                    ...taskList,
                    {  name: e.target.value, date :  Date() }
                  ]);
                  setTask("");
            }

         }
       }

    return (
        <div>
            <input value ={task} placeholder="Saisissez une tache" onKeyDown={submit} onInput={onInput}></input>
            <table>
                <th><div className="thText">tache</div></th>
                <th>Action</th>
                <tbody>
                    {taskList.length>0 ? taskList.map((task => 
                        <tr>
                            <td>
                                <div>
                                    {task.name}
                                </div>
                            </td>
                            <td><button onClick={() => confirmed(task)}>Supprimer</button></td>
                        </tr>))  
                    : null}
                </tbody>
            </table>
        </div>
    );
}; 

export default ToDo; 
