import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { loadRecipes } from 'ducks/recipes';
import styles from './Overview.css';
import { Item, Home } from 'modules';
import bg from 'images/bg.png';
import cn from 'classnames';
import search from 'images/search.png';

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                q: this.props.params.query,
            },
            searchOpened: false,
        }
        this.toggleOpened = this.toggleOpened.bind(this);
    }

    componentDidMount() {
        this.props.loadRecipes({q: this.state.query.q});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.query !== this.props.params.query) {
            this.setState({
                query: {
                    q: nextProps.params.query,
                },
            }, () => {
                this.props.loadRecipes({
                    q: this.state.query.q
                });
                // 500ms delay to prevent two transitions at the same time, makes everything smoother
                setTimeout(() => {
                    this.toggleOpened();
                }, 500);
            })
        }
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
                { this.props.recipes.hits &&
                    <div styleName={cn("list", { 'visible': !this.props.loading })}>
                        {this.props.recipes.hits.map((item, index) => 
                            <Item key={index} item={item} />
                        )}
                    </div>
                }
            </div>
        );
    }

}

export default connect(
    state => ({
        loading: state.recipes.loading,
        recipes: state.recipes.result
    }),
    { loadRecipes }
    )(
        cssModules(styles, { allowMultiple: true })(Overview)
    );