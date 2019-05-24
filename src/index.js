import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/AboutPage/About'
import Thought from './pages/ThoughtPage/Thought'
import Work from './pages/WorkPage/Work'
import Contact from './pages/ContactPage/Contact'


ReactDOM.render(
    (<BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/work" component={Work} />
                <Route path="/thought" component={Thought} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
    
)

