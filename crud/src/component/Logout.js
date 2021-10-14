import React from 'react'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            localStorage.clear();
            history.push("/login")

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }
    
        })
    })




    return (
        <>
            
        </>
    )
}

export default Logout