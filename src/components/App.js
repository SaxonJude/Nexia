import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/styling/style.css';

import Home from './Landing';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" exact component={Home}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;