import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FormGroup } from '@material-ui/core';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };

    const expandIt = () => {
            setExpand(true);
    };

    const bToNormal = () => {
        setExpand(false);
    };

return(
   <>
    <div class="container">
        <form>
            <div class="row">
                {expand?
                <div class="col">Title</div> : null}
                <div class="col">Description</div>
            <div class="w-100"></div>
            {expand?<div class="col"><input type="text" placeholder = "Title" value={note.title} onChange={inputEvent} name="title" /></div> : null}
                 <div class="col"><textarea rows="" column="" placeholder = "Write a note" value={note.content} onChange={inputEvent} name="content" onClick={expandIt} onDoubleClick={bToNormal}></textarea></div>
            <div class="w-100"></div>
                <div class="col">
                {expand?
                    <Button onClick={addEvent}>
                    <AddIcon className="plus_sign" />
                </Button>
                : null}
                </div>
            </div>
        </form>
    </div>



       {/* <div className="row">
           <form>
                <input type="text" placeholder = "Title" />
                <textarea rows="" column="" placeholder = "Write a note"></textarea>
                <Button>
                    <AddIcon className="plus_sign" />
                </Button>
           </form>
        </div> */}
   </>
);
}

export default CreateNote;