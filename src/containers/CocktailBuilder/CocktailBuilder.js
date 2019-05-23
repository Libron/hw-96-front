import React, {Component} from 'react';
import CocktailForm from "../../components/CoctailForm/CocktailForm";

class CocktailBuilder extends Component {
    render() {
        return (
            <div>
                <h3>Add new cocktail</h3>
                <CocktailForm/>
            </div>
        );
    }
}

export default CocktailBuilder;