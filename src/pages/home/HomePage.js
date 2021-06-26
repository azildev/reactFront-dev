import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
}  from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Halaman Home Page</h1>
            </div>
        );
    }
}

export default HomePage;