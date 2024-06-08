import { Input } from "@mui/base";
import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

function TodoInput() {
  const { formData, setFormData } = useContext(TodoContext);
  const [data,setData]=useState({});

  const priorityArr=[
    {Title:"Low",value:"low",name:"priority"},
    {Title:"Intermediate",value:"intermediate",name:"priority"},
    {Title:"High",value:"high",name:"priority"}

  ]
  ///handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value ,status:"pending"  });
  }

  //submit handle
  function onSubmit(e){
    e.preventDefault();
    if(data?.title){
      //to reset form filled data on submit
      e.target.reset();
      setFormData([...formData,data]);
      setData({})
    }
    else{
      alert("Please must Fill titile details")
    }
  }

  return (
    <div className="formmain">
      <h2 style={{textAlign:"center"}}>My ToDo list</h2>
      <form action="" onSubmit={onSubmit} className="form">
        <div>
          <label htmlFor="">Task : </label> <br /><br />
          <Input name="title" placeholder="Enter Your Task" type="text" onChange={handleChange} value={(data?.title)?data?.titile:""}/>
          &emsp;{" "}
        </div>
        <div>
          <label htmlFor="">Task Description: </label> <br /><br />
          <textarea
            name="description"
            placeholder="Task Description"
            onChange={(e) => handleChange(e)}
            value={(data?.description)?data?.description:""}
          />
        </div>
        <div>
        <label htmlFor="">Priority: </label><br /><br />
        {/* priority list  */}
        <div style={{display:"flex",gap:"5px"}}>
          {
            priorityArr?.map((ele)=><>{ele.Title} <Input name={ele.name} type="radio" onClick={handleChange} value={ele.value}/></>)
          }
        </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
