// import React, { Component } from "react";
import './contact.css';
import { useState } from 'react';
export default function Contact() {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  })

  const getUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value })

  }

  const postDatabase = async (e) => {
    e.preventDefault();
    // alert();
    let res=await fetch('https://react-data-77ff5-default-rtdb.firebaseio.com/react-data.json',
      {
        method: "POST",
        header: "Content-type:application/json",
        body: JSON.stringify({
          firstname: user.name,
          lastname: user.surname,
          email: user.email,
          phone: user.contact,

        })
      })
      if(res){
        alert();
      }
  }


  return (
    <div>
      <div className="con1">

        <div className="c1">
          <div className='contactimg-box'>
            <img src='./image/contactnewimg.jpg' alt="no" className='contactimg' />
          </div>

          <div className='contact-body'>
            <div className='title-box'>

              <h2 className='contact-title'><i>Contact Us!</i></h2>
              <p className='contact-title'><i>We will get back send you asap!</i></p>
            </div>
            <form methode='post' onSubmit={postDatabase}>
              <div className="c2">Name:<input type="text" placeholder="Enter your  name" name="firstname" value={user.name} onChange={getUserData}></input><br /></div>
              <div className="c2">Surname:<input type="text" placeholder="Enter your surname" name="lastname" value={user.surname} onChange={getUserData}></input><br /></div>
              <div className="c2">Email:<input type="email" placeholder="Enter your email" name="email" value={user.name} onChange={getUserData}></input><br /></div>
              <div className="c2"> Phone:<input type="tel" placeholder="Enter your number" name="phone" value={user.name} onChange={getUserData}></input></div>
             <button type='submit' className="send"><i>Send</i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
