import React ,{useState,useEffect }from 'react';
import { useHistory} from 'react-router-dom';

const Privateroute = (props) => {
    const history=useHistory()
    const [check, setcheck] = useState(0);
    useEffect(() => {
        if(!localStorage.getItem('token') && localStorage.getItem('token') !== ''){
            history.push('/login');
        }else{
            setcheck(1);
        }
     } )
   
    let Cmp=props.Cmp
    

    return (
        <div>
            {check === 1 &&
                <Cmp/>
                
            }
            
        </div>
    )
}


export default Privateroute
