import React 
from 'react';
import { useHistory } from 'react-router-dom';

const Privateroute = (props) => {
    const history=useHistory()
   
    
    let Cmp=props.Cmp

    
        history.push("/login")
   
    
    return (
        <>
            <Cmp/>
        </>
    )
}



export default Privateroute
