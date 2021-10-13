import React from 'react';
import { useHistory } from 'react-router-dom';

const Privateroute = (props) => {
    const history=useHistory()
   
    history.push("/login")
    let Cmp=props.Cmp

    return (
        <>
            <Cmp/>
        </>
    )
}



export default Privateroute
