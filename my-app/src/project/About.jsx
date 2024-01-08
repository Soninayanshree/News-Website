import React, { Component } from "react";
import './about.css';
export default class About extends Component{
    render(){
        return(
            <div>
                
                <div className="aboutmainbox"> 
                <div className="aboutbox"> 
                 <div><h2 className="abt-title"><i>About Page</i></h2></div> 
                    <div className="aboutcontainer">
                       <div className="container">
                           <div>
                             <img src="./image/about.jpg" width="180px" height="200px" alt="about"  className="aboutimg"/>
                            </div>
                            <div className="aboutbody">
                             <h3>Hello There!</h3>
                             <p>
                                News is information that is published in newspapers and broadcast on radio and television about recent events in the country or world or in a particular area of activity.<li>
                                <b>Afshan Anjum</b>, journalist and anchor. She worked as a senior news editor with NDTV India.</li>
                              <li> <b> Afroz Alam Sahil</b>, an Indian journalist and author who covers topics pertaining to Indian politics, history and society. Currently, he is an editor at BeyondHeadlines.</li>

                             </p>
                            <div><button className="btn2">Download information</button></div> 
                            </div>
                       </div>
                        <div className="aboutbutton">
                           <a href="./form.js"><button className="btn1">Reader</button></a>
                           <a href=""><button className="btn1">Coder</button></a>
                           <a href=""><button className="btn1">Designer</button></a>
                      </div>
                    </div>
                </div>
                </div> 
            </div>
        )
    }
}