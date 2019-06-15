import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app'
import GlobalStyle from './design/global-styles'

const root = document.getElementById('root')
ReactDOM.render(
    <Router>
        <GlobalStyle/>
        <App />
    </Router>,
    root
)