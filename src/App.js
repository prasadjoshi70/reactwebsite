import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import List from './List';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from "react-digital-clock";



//increment and decrement example

function App()
{
  const [num, setNum] = useState(0);

  const inceNum = () => {
      setNum(num + 1);
  }

  const descNum = () => {
    if(num > 0){
      setNum(num - 1);
    }
    else{
      alert("Number less then 0");
      setNum(0);
    }
  }

  return(
         <>
         <h1> {num} </h1>
          <br /><br />
          <button onClick={inceNum}> <AddIcon /> </button> &nbsp;&nbsp;&nbsp;&nbsp;
          <Tooltip title="Delete">
            <Button onClick={descNum}> Decrement </Button> 
          </Tooltip>
          <br />
          <Clock />
          </>
);
 }


// todo list example add
// function App()
// {
//   const [ inputList, setinputList ] = useState("");
//   const [ Items, setItems] = useState([]);

//   const itemEvent = (event) => {
//          setinputList(event.target.value);
//       };

//       const listOfItems = () => {
//         setItems((oldItems) => {
//           return [...oldItems, inputList];
//         });
//         setinputList("");
//       };


//   return(
//     <>
//      <input type="text" placeholder = "Add Content" onChange={itemEvent} value={inputList} /><br /><br />
//      <button onClick={listOfItems}> Add </button>
//      <br />

//      <ol>
//       {Items.map( (itemval) => {
//         return <li> {itemval}  </li>;
//       })} 
//      </ol>
//     </>
//   );
// }



//complex form elements

// function App()
// {
//   const [fullName, setFullName ] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });
  

//   const onSubmits = (event) => {
//     event.preventDefault();
//   }

//   const inputEvent = (event) => {

//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((preValue) => {

//       return{
//         ...preValue,
//         [name]: value,
//       }


//   //       if(name === "fname"){
//   //           return {
//   //             fname: value,
//   //             lname: preValue.lname,
//   //             email: preValue.email,
//   //             phone: preValue.phone,
//   //           };
//   //       } else if(name === "lname"){
//   //         return {
//   //           fname: preValue.fname,
//   //           lname: value,
//   //           email: preValue.email,
//   //           phone: preValue.phone,
//   //         };
//   //     }
//   //     else if(name === "email"){
//   //       return {
//   //         fname: preValue.fname,
//   //         lname: preValue.lname,
//   //         email: value,
//   //         phone: preValue.phone,
//   //       };
//   //   }
//   //   else if(name === "phone"){
//   //     return {
//   //       fname: preValue.fname,
//   //       lname: preValue.lname,
//   //       email: preValue.email,
//   //       phone: value,
//   //     };
//   // }


//     });
//   };



//   return(
//         <>
//         <form onSubmit = {onSubmits} >
//         <h1> Hello {fullName.fname} {fullName.lname}</h1>
//         <h4> {fullName.email}</h4>
//         <h6> {fullName.phone}</h6>
//         <br />
//         <input type="text" placeholder = "Enter First Name" name="fname" onChange={inputEvent} value = {fullName.fname} /><br /><br />
//         <input type="text" placeholder = "Enter Last Name" name="lname" onChange={inputEvent} value = {fullName.lname} /> <br /><br />
//         <input type="email" placeholder = "Enter Email" name="email" onChange={inputEvent} value = {fullName.email} /> <br /><br />
//         <input type="number" placeholder = "Enter Phone Number" name="phone" onChange={inputEvent} value = {fullName.phone} /><br /><br />
//         <button type="submit"> Submit </button>
//         </form>
//         </>
//       );
// }






// Login Form

// function App()
// {
//   const [ name, setFirstName ] = useState("");
//   const [ Lastname, setLastName ] = useState("");
//   const [ fullname, setFullName ] = useState();
//   const [ Lastnamenew, setLastNamenew ] = useState("");

//   const onSubmits = (event) => {
//     event.preventDefault();
//       setFullName(name);
//       setLastNamenew(Lastname);
//   }

//   const inputEventFirst = (event) => {
//     setFirstName(event.target.value);
//   };

//   const inputEventLast = (event) => {
//     setLastName(event.target.value);
//   };

//   return(
//         <>
//         <form onSubmit = {onSubmits} >
//         <h1> Hello {fullname} {Lastnamenew} </h1>
//         <br />
//         <input type="text" placeholder = "Enter First Name" onChange={inputEventFirst} />
//         <input type="text" placeholder = "Enter Last Name" onChange={inputEventLast} />
//         <button> Submit </button>
//         </form>
//         </>
//       );
// }





 // forms

// function App()
// {
//   const [ name, setName ] = useState("");
//   const [ fullname, setFullName ] = useState();

//   const inputEvent = (event) => {
//     setName(event.target.value);
//   };

//   const onSubmit = () => {
//       setFullName(name);
//   }

//   return(
//         <>
//         <h1> Hello {fullname} </h1>
//         <br />
//         <input type="text" placeholder = "Enter Name" onChange={inputEvent} />
//         <button onClick={onSubmit}> Submit </button>
//         </>
//       );
// }

//Get time using hooks

// function App(){
// const time1 = new Date().toLocaleTimeString();

// const [ count, setCount ] = useState(time1);

// const Inc =() =>{
//   setCount(count + 1);
// }
//   return(
//     <>
//     <h1> {time1} </h1>
//     <button onClick={Inc}> Get Time </button>
//     </>
//   );
// }

//Hooks example

// function App(){
// const state = useState();
// const [ count, setCount ] = useState(0);

// const Inc =() =>{
//   setCount(count + 1);
// }
//   return(
//     <>
//     <h1> {count} </h1>
//     <button onClick={Inc}> Click Me </button>
//     </>
//   );
// }



// Component with props cards

// function App(props){
//   return(
//     <>
//   <div className="col-sm-4">
//     <div className="card">
//       <img src={props.imgsrc} className="card-img-top img1" alt={props.title} />
//         <div className="card-body">
//           <h5 className="card-title">{props.title}</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a className="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//   </div>
//     </>
//   );
// }


// Normal component

// function App() {
//   return (
//     <>
//     <Heading/>
//     <List/>
//     </>
//   );
// }



// Component with css n javascript

// function App() {

// const hour = new Date().getHours();
// const cssStyle = {};
// let greeting= "";

// if(hour >= 1 && hour < 12){
//   greeting = 'Good Morning';
//   cssStyle.color = "Green";
// } if(hour >= 12 && hour < 19){
//   greeting = 'Good Afternoon';
//   cssStyle.color = "Orange";
// }
// else{
//   greeting = 'Good Night';
//   cssStyle.color = "Yellow";
// }


//   return (
//     <>
//     <h1> Hello Sir, <span style= {cssStyle} > {greeting} </span></h1>
//     </>
//   );
// }




export default App;
