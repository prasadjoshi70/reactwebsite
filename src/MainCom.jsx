import React, { useState, createContext } from 'react';
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const MainCom = (props) => {
    return(
    <>
    <FirstName.Provider value={"Prasad"}> 
    <LastName.Provider value={"Joshi"}> 
       <ComA /> 
       </LastName.Provider>
    </FirstName.Provider>

    </>
    );
};

export default MainCom;
export {FirstName, LastName};