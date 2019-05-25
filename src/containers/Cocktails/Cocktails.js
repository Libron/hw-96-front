import React, {Component, Fragment} from 'react';
import {Card, CardTitle, CardText, CardColumns, CardBody, Badge} from 'reactstrap';
import {connect} from "react-redux";
import {deleteCocktail, fetchCocktails, publishCocktail} from "../../store/actions/cocktailsActions";
import CocktailThumbnail from "../../components/CocktailThumbnail/CocktailThumbnail";
import {NavLink} from "react-router-dom";

class Cocktails extends Component {
    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
        this.props.fetchCocktails(this.props.location.search);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.fetchCocktails(this.props.location.search);
        }
    }

    render() {
        if (!this.props.cocktails) {
            return <div>Loading</div>
        }

        if (!this.props.cocktails.length === 0) {
            return <h1>There is no cocktails !</h1>
        }

        const content = this.props.cocktails.map(item => (
            <Card key={item._id}>
                <CocktailThumbnail image={item.image}/>
                <CardBody>
                    {item.published ? <p><Badge>Published</Badge></p> : null}
                    <CardTitle tag={NavLink} to={'/cocktails/' + item._id}>{item.name}</CardTitle>
                    <CardText>
                        {this.props.user && this.props.user.role === 'admin' ?
                            <Fragment>
                                <button onClick={() => this.props.deleteCocktail(item._id)}>Delete</button>
                                <button onClick={() => this.props.publishCocktail(item._id)}>Toggle Publish</button>
                            </Fragment>
                            : null}</CardText>
                </CardBody>
            </Card>
        ));

        return (
            <CardColumns>
                {content}
        </CardColumns>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    cocktails: state.cocktails.cocktails,
});

const mapDispatchToProps = dispatch => ({
    fetchCocktails: (query) => dispatch(fetchCocktails(query)),
    deleteCocktail: id  => dispatch(deleteCocktail(id)),
    publishCocktail: id => dispatch(publishCocktail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);