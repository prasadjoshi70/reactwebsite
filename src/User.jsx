import React, { useState, useEffect } from 'react';
import {useParams, useLocation, useHistory} from "react-router-dom";

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();

    return (
    <>
    <h1> User {fname}{lname} page</h1>
    <p>My Location is {location.pathname}</p>
    {location.pathname === `/user/prasad/joshi` ?
    <button onClick={ () => history.goBack()}> Click me </button>   : null 
}
    </>
    );
};

export default User;