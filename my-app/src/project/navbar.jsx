import  './nav.css';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component{
 render(){
    return(
        <div className='position'>
            <div className='nav'>
               <div className='n1'>
                 <img src='./image/logo.jpg' width="150px" height="90px" alt='news'/>;
               </div>
               <div className='n2'>
                  <Link to='/' className='l1'>Home</Link>
                  <Link to='/about'className='l1'>About</Link>
                  <Link to='/contact'className='l1'>Contact</Link>
                </div>
            </div>
        </div>
    )
 }   
}