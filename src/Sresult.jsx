import React from 'react';

const Sresult = (props) => {

    const img =`https://source.unsplash.com/600x400/?${props.name}`;

    return (
        <>
            <img src={img} alt="Search" />
        </>
    );

};

export default Sresult;