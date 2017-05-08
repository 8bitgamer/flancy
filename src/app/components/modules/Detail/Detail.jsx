import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { loadRecipe } from 'ducks/recipes';
import styles from './Detail.css';
import bg from 'images/bg.png';
import cn from 'classnames';
import { Home } from 'modules'
import search from 'images/search.png';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null,
            searchOpened: false,
        }
        this.toggleOpened = this.toggleOpened.bind(this);
    }

    componentDidMount() {
        this.props.loadRecipe({
            q: this.props.params.id}, {callback : () => {
            this.setState({
                recipe: this.props.recipe.hits[0].recipe,
            })
        }});
    }

    toggleOpened() {
        this.setState({
            ...this.state,
            searchOpened: !this.state.searchOpened,
        })
    }

    render() {
        return (
            <div styleName="wrapper" style={{backgroundImage: `url(${bg})`}}>

                <Home type="dragdown" opened={this.state.searchOpened} />
                <img styleName={cn("searchicon", { 'visible': !this.props.loading })} src={search} onClick={this.toggleOpened} />
                    { this.state.recipe &&
                        <div styleName={cn("recipe", { 'visible': !this.props.loading })}>
                            <div>
                                <h1 styleName="recipeTitle">{this.state.recipe.label}</h1>
                                <img styleName="recipeImage" src={this.state.recipe.image} />
                                <h3 styleName="recipeSubtitle">Ingredients</h3>
                                <ul styleName="recipeIngredients">
                                    {this.state.recipe.ingredientLines.map((ingredient, index) => 
                                        <li styleName="ingredient" key={index}>- {ingredient} -</li>
                                    )}
                                </ul>
                                <div styleName="clear"></div>
                                <hr styleName="recipeHr" />
                                <a styleName="recipeLink" target="_blank" href={this.state.recipe.url}>Click here to see how to cook this marvelous dish!</a>
                                <hr styleName="recipeHr" />
                                <h4 styleName="subHeader">Health Labels</h4>
                                <div>
                                    {this.state.recipe.healthLabels.map((label, index) => 
                                        <p styleName="label" key={index}>{label}</p>
                                    )}
                                </div>
                                <hr styleName="recipeHr" />
                                <h4 styleName="subHeader">Nutrients</h4>
                                <div styleName="nutrientsWrapper">
                                    {Object.keys(this.state.recipe.totalNutrients).map((nutrient, index) => 
                                        <p styleName="nutrient" key={index}>{Math.ceil(this.state.recipe.totalNutrients[nutrient].quantity)} {this.state.recipe.totalNutrients[nutrient].unit} {this.state.recipe.totalNutrients[nutrient].label}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                    {
                        !this.props.loading && !this.props.recipe.count &&
                            <h1 styleName="no-results">No recipe found. Probably some ID's got messed up.</h1>
                    }
            </div>
        );
    }

}

export default connect(
    state => ({
        loading: state.recipes.loading,
        recipe: state.recipes.result
    }),
    { loadRecipe }
    )(
        cssModules(styles, { allowMultiple: true })(Detail)
    );