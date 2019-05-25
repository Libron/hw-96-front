import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchCocktail} from "../../store/actions/cocktailsActions";
import connect from "react-redux/es/connect/connect";
import CocktailThumbnail from "../../components/CocktailThumbnail/CocktailThumbnail";

class CocktailDetail extends Component {
    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
        this.props.fetchCocktail(this.props.match.params.id);
    };

    render() {
        if (!this.props.cocktail) {
            return <div>Loading</div>
        }

        const cocktail = this.props.cocktail;
        return (
            <div className="Cocktail">
                <Row>
                    <Col sm={3}><CocktailThumbnail image={cocktail.image}/></Col>
                    <Col sm={9}>
                        <h2>{cocktail.name}</h2>
                        <span>Ingredients: </span>
                        <ul>{cocktail.ingredients.map((ing, idx) => (
                            <li key={idx}><span>{ing.name}</span> <b>{ing.amount}</b></li>
                        ))}</ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}><p>Recipe: {cocktail.recipe}</p></Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    cocktail: state.cocktails.cocktail,
});

const mapDispatchToProps = dispatch => ({
    fetchCocktail: id => dispatch(fetchCocktail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailDetail);