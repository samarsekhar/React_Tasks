import React from 'react';
import { Redirect } from "react-router-dom";

const LogOut = () => {
    localStorage.clear();
    return(
        <Redirect to="/login" />
    )
    
};

export default LogOut;