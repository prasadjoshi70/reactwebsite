import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

return(
   <>
       <div>
            <h1> {props.title}  </h1>
            <p> {props.content} </p>
            <button className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon  />
            </button>
        </div>
   </>
);
}

export default Note;