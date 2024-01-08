import { useState } from 'react';
export default function Form(){
        const [user,setuser]=useState({
            name:"",
            email:"",
            contact:"",
            password:"",
            data:"",
         })
    
     const getUserData=(e)=>{
        alert();
        const name=e.target.name;
        const value=e.target.value;
        setuser({...user,[name]:value})
    
    } 
     const postDatabase=(e)=>{
        e.preventDefault();
      const data=fetch('https://react-data-77ff5-default-rtdb.firebaseio.com/reactstore.json',
    {
        methode:"post",
        header:"Content-type:application/json",
        body:JSON.stringify({
            name:"user.name",
            email:"user.email",
            contact:"user.contact",
            password:"user.password",
            data:"user.data",

        })
    })
     }    
        return(
            <div className='fbox'>
                <div className='title'><b>Form</b></div>
                <form method='post'>
                   <div className='box'>
                    Name: <input type="text" placeholder='enter your name' name="name" value={user.name} onChange={getUserData}/><br/>
                    </div>
                    <div className='box'>
                    Email: <input type="email" placeholder='enter your email' name="email" value={user.email} onChange={getUserData}/><br/>
                    </div>
                    <div className='box'>
                    Contact: <input type="tel" placeholder=' enter your contact' name="contact" value={user.contact} onChange={getUserData}/><br/>
                    </div>
                    <div className='box'>
                    Password: <input type="password" placeholder='enter your email' name="password" value={user.password} onChange={getUserData}/><br/>
                    </div>
                    <div className='box'>
                    Date of Birth: <input type="data" placeholder='MM/DD/YY' name="data" value={user.data} onChange={getUserData}/><br/>
                    </div>
                    <div >
                    <button className='box2'>Submit</button>
                    </div>

                </form>
            </div>
        )
    }

