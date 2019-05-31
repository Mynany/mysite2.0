import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/AboutPage/About'
import Thoughts from './pages/ThoughtPage/Thought'
import Work from './pages/WorkPage/Work'
import Contact from './pages/ContactPage/Contact'
import './index.css'


ReactDOM.render(
    (<BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/work" component={Work} />
                <Route path="/thoughts" component={Thoughts} />
                <Route path="/me" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>),
    document.getElementById('root')
    
)

