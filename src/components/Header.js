import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Qrcode from './Qrcode'
// import App from '../App'
////Es6
class Header extends Component {
  render() {
    return (
        
            <div>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <a className="navbar-brand" href="">Menu</a>
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/qrcode" >Qrcode</a>
                    </li>
                  </ul>
                </div>
              </nav>
             
            </div>
       
    );
  }
}

export default Header;

// function Header(){
//   return (<div className="App">
//         <h1>header</h1>
//        </div>)
// }
// export default Header;