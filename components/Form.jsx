import { useState } from "react"
export default function Form(){
    const[name,setName]=useState({FirstName:"",lastName:""});
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return <div>
        {name.FirstName}-{name.lastName}
        <form action="">
            <label htmlFor="">First name</label><input 
            onChange={(e)=>setName({...name,FirstName:e.target.value})}
             type="text" 
              value={name.FirstName}/>
              <label htmlFor="">Last Name</label><input
              value={name.lastName}
              onChange={(e)=>setName({...name,lastName:e.target.value})} 
              type="text" />
              <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    </div>
}