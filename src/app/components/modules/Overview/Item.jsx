import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { browserHistory } from 'react-router';
import { loadRecipes } from 'ducks/recipes';
import styles from './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: {
                q: '',
            },
        };

        this.gotoDetail = this.gotoDetail.bind(this);
    }

    gotoDetail(uri) {
        // API doesnt provide id's so we have to strip it from the URI they do provide
        const id = uri.substring(uri.indexOf('_') + 1, uri.length);

        browserHistory.push(`/detail/${id}`);
    }

    render() {
        return (
            <div styleName="card">
                <div styleName="wrapper">
                    <div styleName="card-header" onClick={ () => {this.gotoDetail(this.props.item.recipe.uri)}}>
                        <img src={this.props.item.recipe.image} styleName="image"/>
                    </div>
                    <div styleName="card-body">
                        <div>
                            <p styleName="card-title">{this.props.item.recipe.label}</p>
                            <hr styleName="recipeHr" />
                            <ul>
                                {this.props.item.recipe.ingredientLines.map((ingredient, index) => 
                                    <li key={index}>{ingredient}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(
    state => ({}),
    { loadRecipes }
    )(
        cssModules(Item, styles)
    );