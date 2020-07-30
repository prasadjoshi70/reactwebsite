import React, { useState } from 'react';

const Header = (props) => {

return(
   <>
        <div style={{ backgroundColor: "yellow" }}>
        <img src="https://staticcdn.apollotyres.com/CMSOriginal/3989/header-image-pct-1208x640-px_2020.jpg" style={{height: "100px", width: "100px", float:"left"}} />
        <h1 style={{ color: "red", textAlign: "center", height: "100px"}}>Header</h1>
        </div>
   </>
);
}

export default Header;