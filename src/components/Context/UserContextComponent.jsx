import axios from 'axios';
import React, {createContext, useEffect, useState } from 'react'

const userContext = createContext();

function UserContextComponent({children}) {

  const [userDetail,setUserDetail] = useState(JSON.parse(localStorage.getItem("user")));
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    if(userDetail.role==="ADMIN"){
      axios.get(`http://localhost:8080/api/projects`)
      .then((response)=>{
        console.log("Setting projects");
        console.log(response.data.data);
        setProjects(response.data.data)
             })
      .catch((err)=>{
        alert("Error in saving data")
      })
    }
    else{
        axios.get(`http://localhost:8080/api/projects/employee/${userDetail.employeeId}`)
        .then((response)=>{
          console.log("Setting projects");
          console.log(response.data.data);
          setProjects(response.data.data)
               })
        .catch((err)=>{
          alert("Error in saving data")
        })
      }
    
  },userDetail)

  return (
    <userContext.Provider value={{userDetail,setUserDetail,projects,setProjects}}>
        {children}
    </userContext.Provider>
  )
}

export  {userContext,UserContextComponent};