import React, { useState, useEffect } from 'react';
import Sresult from './Sresult';

const Search = () => {

    const [img, setImg] = useState("");
    const inputEvent= (event) => {
        const data = event.target.value;
        setImg(data);
    };

    return (
        <>
        <input type="text" placeholder="Type anything" onChange={inputEvent} value={img} />
        
        { img === "" ? null : <Sresult name={img} /> } 
        </>
    );

};

export default Search;