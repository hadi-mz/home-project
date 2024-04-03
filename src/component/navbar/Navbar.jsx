import React from 'react'
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={require("../../assets/images/home-logo.jpg")} width={100} alt="" />
      </div>
      <div className='serchbar'>
        <div className="Card">
          <div className="CardInner">
             <div className="container">
              <div className="Icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </div>
              <div className="InputContainer">
                <input placeholder="It just can't be houses" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="title" to={"/newhome"}>Add your Home</Link>
    </div>
  )
}
