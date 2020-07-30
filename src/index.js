import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KeepApp from './KeepApp';
import MainCom from './MainCom';
import UseEffect from './UseEffect';
import ConApi from './ConApi';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom';
import Bootstap from './Bootstap';
//import * as serviceWorker from './serviceWorker';

const name ='Prasad';
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();
const image1 = "https://staticcdn.apollotyres.com/CMSOriginal/3989/header-image-pct-1208x640-px_2020.jpg";
const link1 = "https://josephh16.sg-host.com/contact-us-2/";

const heading5 = {
  color: "grey",
  textAlign: "center",
  textTransform: "Capitalize",
};



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,



  // Template Literals and basic react command tutorial 5 to 16
  // <>
  //   <h1 className="heading" contentEditable = "true"> {`Hello SIO. Name is ${name} `} </h1>
  //   <p> Good Morning</p>
  //   <h3 style = {{color:'yellow', textTransform: 'Capitalize'}}> Current date is {currdate}</h3>
  //   <h3 style = {heading5}> Current time is {currtime}</h3>
  //   <img className="img1" src= {image1} alt="random image" />
  //   <br />
  //   <a href= {link1} target="_blank"> Visit Us </a>
  // </>,


  //Challenge tutorial 17
  // <>
  // <Heading/>
  // <h1> Hello Sir, <span style= {cssStyle} > {greeting} </span></h1>
  // <List/>
  // </>,

  // App.js Cards example
  // <>
  // <div className="container">
  // <div className="row">
  //   <App 
  //     imgsrc="https://staticcdn.apollotyres.com/CMSOriginal/3989/header-image-pct-1208x640-px_2020.jpg" 
  //     title="Pic1" 
  //     />
  //   <App 
  //     imgsrc="https://staticcdn.apollotyres.com/CMSOriginal/3989/header-image-pct-1208x640-px_2020.jpg" 
  //     title="Pic2" 
  //     />
  //   <App 
  //     imgsrc="https://staticcdn.apollotyres.com/CMSOriginal/3989/header-image-pct-1208x640-px_2020.jpg" 
  //     title="Pic3" 
  //     />
  //     </div>
  //     </div>
  // </>,





  //hooks example

  <>
  <BrowserRouter>
      <Bootstap />
  </BrowserRouter>
  
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
