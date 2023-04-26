import React from 'react';
import './Signup.css';
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>


    <div className='mainDiv'>
    <p id='title'>Welcome to Serious Dating</p>
    </div>
<Link to="/home">
<button id='exploreBtn'>Explore Now</button>
</Link>
    
    
    
    </>
  )
}

export default Signup