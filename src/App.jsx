import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Post from "./Post";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <NavBar/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/post/:post_id' component={Post}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;