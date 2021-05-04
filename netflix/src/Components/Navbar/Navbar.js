import React, { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = () => {

 const [show, setshow] = useState(false)

 const transitionNavbar = () => {
     if(window.scrollY > 100){
         setshow(true)
     } else {
         setshow(false)
     }
 }

 useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () =>  window.removeEventListener("scroll", transitionNavbar);
 }, [])

    return (
        <div className={ `nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img className="nav__logo"
             src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
             alt="" 
             />
                <img className="nav__avatar"
             src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
             alt="" 
             />
             </div>
             {/* <h1>This is the nav</h1> */}
        </div>
    )
}

export default Navbar
