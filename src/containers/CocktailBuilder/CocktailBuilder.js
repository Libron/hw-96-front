import React, {Component} from 'react';
import CocktailForm from "../../components/CoctailForm/CocktailForm";
import {connect} from "react-redux";
import {createCocktail} from "../../store/actions/cocktailsActions";

class CocktailBuilder extends Component {
    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <h3>Add new cocktail</h3>
                <CocktailForm submit={this.props.createCocktail}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    createCocktail: cocktailData => dispatch(createCocktail(cocktailData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailBuilder);