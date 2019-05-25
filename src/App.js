import React, {Component} from 'react';
import './App.css';
import {Container} from "reactstrap";
import Routes from "./Routes";
import Toolbar from "./components/Toolbar/Toolbar";
import {NotificationContainer} from "react-notifications";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logoutUser} from "./store/actions/usersActions";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <Toolbar user={this.props.user} logout={this.props.logoutUser}/>
                <Container>
                <Routes/>
               </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
