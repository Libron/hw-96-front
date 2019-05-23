import React, {Component} from 'react';
import {testData} from '../../fixtures';
import {Col, Row} from "reactstrap";

class CocktailDetail extends Component {
    componentDidMount() {

    };

    render() {
        return (
            <div className="Cocktail">
                <Row>
                    <Col sm={3}><img src={testData.cocktails[0].image} alt="Product" width="100%"/></Col>
                    <Col sm={9}>
                        <h2>{testData.cocktails[0].name}</h2>
                        <ul>{testData.cocktails[0].ingredients.map((ing, idx) => (
                            <li key={idx}><span>{ing.name}</span> <b>ing.amount</b></li>
                        ))}</ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}><p>Recipe: {testData.cocktails[0].recipe}</p></Col>
                </Row>


                {/*<ListGroup>*/}
                {/*{testData.cocktails.map((item, idx) => (*/}
                {/*<ListGroupItem key={idx} tag="a" href="#">*/}
                {/*<img src={item.image} alt="" width="50px"/>*/}
                {/*<p>{item.name}</p>*/}
                {/*</ListGroupItem>*/}
                {/*))}*/}
                {/*</ListGroup>*/}


            </div>
        );
    }
}

export default CocktailDetail;