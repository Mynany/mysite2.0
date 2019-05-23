import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'


ReactDOM.render(
    (<BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
    
)

