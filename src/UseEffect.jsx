import React, { useState, useEffect } from 'react';


const UseEffect = () => {
 
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        //alert("Clicked");
        document.title = `You clicked ,me ${num} times`;
    }, [num]);
   
    return (
        <>
    <button onClick= {() => {
        setNum(num + 1);
    }}> Click me {num} </button>

    <br />

    <button onClick= {() => {
        setNums(nums + 1);
    }}> Click me {nums} </button>

    </>

    );
};

export default UseEffect;