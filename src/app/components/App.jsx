import React from 'react';
import {Helmet} from "react-helmet";
import favicon from 'images/favicon.png';

const App = ({ children }) => (
    <main>
    	<Helmet>
    		<title>Flancy</title>
    		<link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
        {children}
    </main>
);

App.propTypes = {
    children: React.PropTypes.object.isRequired,
};

export default App;
