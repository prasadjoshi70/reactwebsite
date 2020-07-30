import React, { useState, useEffect, useRef } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Services from './Services';
import Blog from './Blog';
import User from './User';
import Search from './Search';



const Main = () => {

    const Name = () => {
        return <h1> Hello, I am on Name Page </h1>;
    }

    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Search' component={Search} />
            <Route exact path='/Contact/Name' component={Name} />
            <Route exact path='/Services' component={() => <Services name="Services" />} />
            <Route exact path='/Blog' render={() => <Blog name="Blog" />} />
            <Route path="/User/:fname/:lname" component={User} />
            <Redirect to="/" />
            {/* <Route component={Error} /> */}
            
        </Switch>
        </>
    )

};

export default Main;