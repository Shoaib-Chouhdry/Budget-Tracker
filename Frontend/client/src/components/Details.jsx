import React, { useEffect,useState } from "react"
import axios from "axios";
function Details() {

    const [list,setList]=useState([]);

    
        useEffect(()=>{
    const fetchdata=async()=>{
        axios.get("http://localhost:5000/details").then(
            result=>setList(result.data)).catch(err=>console.log(err))
        
             console.log(list)
        
    } 

       fetchdata()


        },[])
        const handleDelete=(id)=>{
            axios.delete(`http://localhost:5000/deleteuser/${id}`).then(res=>console.log(res)).catch(err=>console.log(err.response.data))




        }
    return (
       <div className="h-screen p-5 bg-gray-200">
        <h1 className="text-2xl mb-4 flex items-center justify-center" >Transaction List</h1>
        <table className="w-full ">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">
        Title
      </th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">
        Amount
      </th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">
        Income Type
      </th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">
        Delete
      </th>
                </tr>
              </thead>
              <tbody>
              
   {
    list.map(item=>
        <tr>
            <td className="p-3 text-sm text-gray-700">{item.title}</td>
            <td className="p-3 text-sm text-gray-700">{item.amount}</td>
            <td className="p-3 text-sm text-gray-700">{item.options}</td>
            <td className="p-3 text-sm text-red-700 "><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
        </tr>

           )
   } 

              </tbody>


 

        </table>
        
        </div>  
    )
  }
  
  export default Details