import React, { Component } from 'react';
import Recipe from "./Recipe";


export default class RecipeList extends Component {
    render() {
        return (
            <div>
                <p>Hello from Recipe List</p>
                <Recipe />
            </div>
        )
    }
}
