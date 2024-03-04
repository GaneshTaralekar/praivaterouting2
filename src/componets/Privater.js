import React from 'react';
import { Outlet , Navigate} from 'react-router-dom';

const Privater=()=>{
    let loggedIn = true;

    if(loggedIn){
        return <Outlet/>
    }
    else{
        // return "User is Not Logged in";
        return <Navigate to={"error"}/>
    }
//   return (
//     <>
   
//     <div>
//       <h1>This is the Private Routing page </h1>
//     </div>
//     <Outlet/>

//     </>
//   );
}

export default Privater;
