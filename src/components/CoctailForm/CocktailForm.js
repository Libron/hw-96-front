import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class CocktailForm extends Component {
    state = {
        name: '',
        ingredients: [],
        description: '',
        recipe: '',
        image: null
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();
        console.log(formData);

        // Object.keys(this.state).forEach(key => {
        //     formData.append(key, this.state[key]);
        // });

        // this.props.onSubmit(formData);
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

                <FormGroup row>
                    <Label sm={2} for="ingredients">Ingredients</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="ingredients" id="ingredients"
                            placeholder="Enter cocktail name"
                            value={this.state.ingredients}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
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