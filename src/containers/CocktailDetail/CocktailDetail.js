import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchCocktail, rateCocktail} from "../../store/actions/cocktailsActions";
import connect from "react-redux/es/connect/connect";
import CocktailThumbnail from "../../components/CocktailThumbnail/CocktailThumbnail";
import Rating from "react-rating";

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

        let currentRate = 0;
        let average = 0;
        try {
            currentRate = this.props.cocktail.rating.find(rate => rate.user === this.props.user._id).rate;
        } catch (e) {
            currentRate = 0;
        }

        try {
            average = this.props.cocktail.rating.reduce((sum, rating) => {
                return sum + rating.rate;
            }, 0) / this.props.cocktail.rating.length;

            if (isNaN(average)) {
                throw Error;
            }
        } catch (e) {
            average = 0;
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
                    <Col sm={12} style={{textAlign: 'center', fontSize: '20px', color: 'blue'}}>
                        <h4>Recipe:</h4>
                        <p >{cocktail.recipe}</p>
                    </Col>
                </Row>

                <div className="RateDash">
                    <h6>Rate this cocktail:</h6>
                    <Rating initialRating={currentRate} onClick={(value) => this.props.rateCocktail(this.props.cocktail._id, value)} />
                    <h2>Rating average: {average.toFixed(1)} stars</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    cocktail: state.cocktails.cocktail,
});

const mapDispatchToProps = dispatch => ({
    fetchCocktail: id => dispatch(fetchCocktail(id)),
    rateCocktail: (id, rate) => dispatch(rateCocktail(id, rate))
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailDetail);