import React from 'react'
import {Route ,Switch} from "react-router-dom"

import Login from "./component/Login"
import Navbar from './component/Navbar'
import Homepage from './component/Homepage'
import Signup from './component/Signup'
import Userpost from './component/Userpost'
import Logout from './component/Logout'
import About from './component/About'
import Privateroute from './Privateroute'
const App= () => {

  
  
  return (
    <>
    <Navbar/>
    <Switch>

            <Route exact path="/" component={Homepage} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Userpost" component={Userpost}/>
            <Route path="/Logout" component={Logout} />
            <Route path="/about">
                <Privateroute Cmp={About}/>
            </Route>
      
     </Switch>
     

    </>
  )
  
}

export default App

