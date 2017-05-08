import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import styles from './Search.css';
import { browserHistory } from 'react-router';
import search from 'images/search.png';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                q: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({
            query: {
                q: event.target.value,
            },
        });
    }

    handleSearch(event) {
        event.preventDefault();
        browserHistory.push(`/overview/${this.state.query.q}`);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input styleName="search" type="text" value={this.state.query.q} onChange={this.handleChange}/>
                    <button styleName="searchbtn" onClick={this.handleSearch}>
                        <img styleName="searchicon" src={search} />
                    </button>
                </form>
            </div>
        );
    }

}

export default connect(
    state => ({
        loading: state.recipes.loading,
    }))(cssModules(Search, styles));