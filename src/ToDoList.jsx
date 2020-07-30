import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import List from './List';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from "react-digital-clock";
import ListCom from './ListCom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () =>
{
    const [ item, setItem ] = useState("");
    const [ newitem, setNewItem ] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
     };

     const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem(" ");
     };


    return(
    <>
        <h1> ToDoList </h1>
        <input type="text" placeholder = "Enter Fruit" onChange={itemEvent} value={item} />
        <Tooltip title="Add">
        <Button onClick={listOfItems}>
            <AddIcon/>
        </Button>
        </Tooltip>
        <button className="btn btn-danger"> Dont Click </button>

       <ol>
       {newitem.map( (val, index) => {
         return <ListCom key={index} text={val} />;
       })} 
      </ol>
    </>
    );
}

export default ToDoList;