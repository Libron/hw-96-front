import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class CocktailForm extends Component {
    state = {
        name: '',
        recipe: '',
        ingredients: [
            {name: '', amount: '', key: Math.random().toString()}
        ],
        image: null,
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            if (key === 'ingredients') {
                const arr = JSON.stringify(this.state[key]);
                formData.append(key, arr);
            } else {
                formData.append(key, this.state[key]);
            }
        });

        this.props.submit(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    addIngredient = e => {
        e.preventDefault();
        this.setState({
            ingredients: [...this.state.ingredients,
                {name: '', amount: '', key: Math.random().toString()}
            ]
        })
    };

    ingredientInputChangeHandler = (e, ndx) => {
        const ingredient = {...this.state.ingredients[ndx]};
        ingredient[e.target.name] = e.target.value;
        const ingredients = [...this.state.ingredients];
        ingredients[ndx] = ingredient;
        this.setState({ingredients});
    };

    removeIngredient = ndx => {
        const ingredients = this.state.ingredients;

        ingredients.splice(ndx, 1);
        this.setState({ingredients});
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup row>
                    <Label sm={2} for="name">Name</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="name" id="name"
                            placeholder="Enter cocktail name"
                            value={this.state.name}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="recipe">Recipe</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea" required
                            name="recipe" id="recipe"
                            placeholder="Enter recipe"
                            value={this.state.recipe}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    {this.state.ingredients.map((ing, ndx) => (
                        <Row key={ing.key}>
                            <Label sm={2} for="ing-name">Ingredients name</Label>
                            <Col sm={4}>
                                <Input type="text" name="name" id="ing-name"
                                       onChange={e => this.ingredientInputChangeHandler(e, ndx)} required/>
                            </Col>
                            <Label sm={1} for="ing-amount">Amount</Label>
                            <Col sm={4}>
                                <Input type="text" name="amount"
                                       onChange={e => this.ingredientInputChangeHandler(e, ndx)} required/>

                            </Col>
                            <Col sm={1}>  {ndx > 0 && <Button type="button" onClick={() => this.removeIngredient(ndx)}><b>X </b></Button>}</Col>
                        </Row>
                    ))}
                    <Button style={{float: 'right', marginTop: '10px'}} color="warning" onClick={this.addIngredient} type="button">Add ingredient</Button>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="image">Cocktail Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={this.fileChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit" color="primary">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default CocktailForm;