import React, { Component } from 'react';

import Navbar from '../navbar/Navbar.component';
import Landing from './Landing.component';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing />
            </div>
        );
    }
}

export default Home;