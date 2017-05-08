import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import styles from './Home.css';
import { Search } from 'modules';
import bg from 'images/bg.png';
import cn from 'classnames';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
        	<div styleName={cn("wrapper", { 'dragdown': this.props.type == "dragdown" }, { 'dragdown-opened': this.props.opened })} style={ this.props.type == "dragdown" ? { backgroundImage: 'none'} : { backgroundImage: `url(${bg})`}}>
    	        <h1 styleName="title">Flancy</h1>
    	        <Search />
            </div>
        );
    }
}

export default cssModules(styles, { allowMultiple: true })(Home)