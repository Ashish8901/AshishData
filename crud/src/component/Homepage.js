import { useState } from "react"
import React from 'react'
import Login from "./Login";
import Signup from "./Signup";

const Homepage = () => {

  const [tab,setTab]=useState(0);
    return (
        <>
          <button onClick={ ()=>{setTab(0)}}>Login</button>
            <button onClick={ ()=>{setTab(1)}}>Register</button>

            {tab == 1 ? <Signup/> : <Login/>}

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="carousel-caption d-none d-md-block">
        <h5>Welcome User</h5>
        <p>Welcome to the CRUD operation website.</p>
      </div>
      <img src="https://picsum.photos/1440/522" class="d-block w-100" alt=".." />
    </div>
    
  </div>
</div>
                    </>
    )
}

export default Homepage;
