import React,{useState} from "react"
function Todolist(){
    const [tasks, setTask]=useState(["Learn HTML css","Learn Tailwind css","Learn JavaScript"]);
    const [newTask,setNewTask]=useState("");

    function handleInputchange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim()!==""){
        setTask(t=>[...t,newTask]);
        setNewTask("");
        }

    }
    function removeTask(index){
        const updatedtask=tasks.filter((_,i)=>i!==index);
        setTask(updatedtask);

    }
    function Movetaskdown(index){
        if(index<tasks.length-1){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index+1]]=
            [updatedtask[index+1],updatedtask[index]];
            setTask(updatedtask);
        }

    }
    function Movetaskup(index){
        if(index>0){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index-1]]=
            [updatedtask[index-1],updatedtask[index]];
            setTask(updatedtask);
        }

    }

    return(
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>
            <input type="text" placeholder="Enter a Task"
            value={newTask}
            onChange={handleInputchange}
             />
             <button className="Add-button"
             onClick={addTask}>Add </button>
             <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="Remove-button" onClick={()=>removeTask(index)}>Delete</button>
                    <button className="up-button" onClick={()=>Movetaskup(index)}>Up</button>
                    <button className="down-button" onClick={()=>Movetaskdown(index)}>Down</button>

                </li>
                )}
             </ol>

        </div>
    );


}
export default Todolist