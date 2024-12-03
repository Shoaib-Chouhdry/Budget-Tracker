import React,{ useState } from "react"
import { Link } from "react-router-dom";


function Home() {
      // const[title,setTitle]=useState()
      // const[amount,setAmount]=useState()
      // const[moneytype, setMoneytype]=useState()
        const [data,setData]=useState({
            title:"",
            amount:"",
            options:"",
        })    

           const handleChange=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setData((pre)=>({...pre,[name]:value}));

           }
           const handlesubmit=async(e,onSubmitProps)=>{
            e.preventDefault()
            try{
                   const response=await fetch("http://localhost:5000/home",{
                    method:'POST',
                    headers:{
                           'Content-Type':"application/json",
                              },
                   body:JSON.stringify(data),
    
                            })
                            if(response){
                              alert("submission successful")
                            } }

                        
                        catch(err){
                                  console.log("error")
                        }         
                  }
    return (
    
        <div className=" h-screen bg-gray-200 flex items-center justify-center ">
            
          <form className="flex flex-col w-full max-w-96 items-center p-18 h-80 " onSubmit={handlesubmit}>
              <h1 className="text-2xl mb-4 mt-4" > Transaction Form </h1>
              
            <input  className="border p-2 border-b-2 mt-2 w-full max-w-sm " 
            name="title" placeholder="Enter Title" type="text" onChange={handleChange}></input>
            


            <input  className="border p-2 border-b-4 mt-2 w-full" 
            type="number"name="amount" placeholder="Enter Amount"onChange={handleChange}></input>
           
           
           <div className="flex flex-col border-b-2 py-2 ml-2">
           <label  > <input className="border "type="radio" name="options" value="Income"  onChange={handleChange}/>Income</label>
           <label> <input className="border "type="radio" name="options" value="Expense"  onChange={handleChange}/>Expense</label>
            </div>
            <button className="w-full bg-gray-500 p-4"> Submit</button>
           
            <Link to="/details"><button className="p-2 w-full bg-gray-500 mt-4 "> Show Transaction list</button> </Link>
           
            </form>
           
            </div>
    )
  }
  
  export default Home