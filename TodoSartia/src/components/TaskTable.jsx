import React, { useContext } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TodoContext } from "./TodoContext";


function TaskTable() {
  const { formData, setFormData } = useContext(TodoContext);
  const styleTd=(task)=> ({backgroundColor:task.priority=="high"?"red":task.priority==="intermediate"?"yellow":"black" ,color:task.priority==="intermediate"?"black":"white"})
    function handleStatus(index){
        let data=[...formData];
        let obj = {...data[index], status:'complete'};
        data[index] = obj; 
        setFormData(data);
    }
    const handleDelete=(index)=>{
      console.log(index);
      let data=[...formData];
      data.splice(index,1);
      setFormData(data);
    }
    function clearAll(){
        let data=[...formData];
        let AllpendingData=data.filter((ele)=>ele.status!=="complete");
        setFormData(AllpendingData);
    }
  return (
    <div>
      <h3>Pending Task</h3>
      <table border={"1px"}>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th style={{ width: "250px" }}>Title</th>
            <th style={{ width: "400px" }}>Description</th>
            <th>Priority</th>
            <th>Mark as Complete</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            formData.length?formData.map((task,index)=>{
                return <>
               {task.status==="pending"?<tr>
                    {/* <td>{index+1}</td> */}
                    <td style={styleTd(task)}>{task.title}</td>
                    <td style={{ maxWidth: "500px",wordBreak:"break-all",...styleTd(task)} }>{task.description}</td>
                    <td style={styleTd(task)}>{task.priority}</td>
                    <td><input type="checkbox" onClick={()=>handleStatus(index)}/></td>
                    {/* <td style={{backgroundColor:"red", color:"white"}}>Del</td> */}
                    <td style={{color:"red", backgroundColor:"white",cursor:"pointer",fontWeight:"bold"}} onClick={()=>handleDelete(index)}>Delete</td>
                </tr>:""}
                </>
            }):""
          }        
         {!formData.length?"No Row Found":""}
        </tbody>
      </table>

      <h3>completed Task</h3> <button style={{backgroundColor:"aliceblue",color:"black"}} onClick={clearAll}>Clear All</button>
      <table border={"1px"}>
        <thead>
          <tr>
            <th style={{ width: "250px" }}>Title</th>
            <th style={{ width: "400px" }}>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            formData.length?formData.map((task,index)=>{
                return <>
               {task.status==="complete"?<tr style={{background:task.priority==="high"?"red":task.priority==="itermediate"?"yellow":"black" ,color:task.priority==="itermediate"?"black":"white"}}>
                    <td>{task.title}</td>
                    <td style={{ maxWidth: "500px",wordBreak:"break-all"} }>{task.description}</td>
                    <td>{task.priority}</td>
                    <td>Completed</td>
                </tr>:""}
                </>
            }):""
          }
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
