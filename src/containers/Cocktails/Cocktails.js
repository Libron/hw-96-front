import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';

import {testData} from "../../fixtures";
class Cocktails extends Component {
    render() {
        return (
            <CardColumns>
            <Card>
                <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{testData.cocktails[0].name}</CardTitle>
                    <CardText>Rating: 4.5 (2 votes)</CardText>
                </CardBody>
            </Card>
                <Card>
                    <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{testData.cocktails[0].name}</CardTitle>
                        <CardText>Rating: 4.5 (2 votes)</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{testData.cocktails[0].name}</CardTitle>
                        <CardText>Rating: 4.5 (2 votes)</CardText>
                    </CardBody>
                </Card> <Card>
                <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{testData.cocktails[0].name}</CardTitle>
                    <CardText>Rating: 4.5 (2 votes)</CardText>
                </CardBody>
            </Card> <Card>
                <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{testData.cocktails[0].name}</CardTitle>
                    <CardText>Rating: 4.5 (2 votes)</CardText>
                </CardBody>
            </Card> <Card>
                <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{testData.cocktails[0].name}</CardTitle>
                    <CardText>Rating: 4.5 (2 votes)</CardText>
                </CardBody>
            </Card> <Card>
                <CardImg top width="100%" src={testData.cocktails[0].image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{testData.cocktails[0].name}</CardTitle>
                    <CardText>Rating: 4.5 (2 votes)</CardText>
                </CardBody>
            </Card>
        </CardColumns>
        );
    }
}

export default Cocktails;