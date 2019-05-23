import React, {Component} from 'react';
import './App.css';
import {Container} from "reactstrap";
import Routes from "./Routes";
import Toolbar from "./components/Toolbar/Toolbar";
import {NotificationContainer} from "react-notifications";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <Toolbar/>
                <Container>
                <Routes/>
               </Container>
            </div>
        );
    }
}

export default App;
