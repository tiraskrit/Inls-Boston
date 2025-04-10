import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Events from './components/pages/Events';
import Gallery from './components/pages/Gallery';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
};

export default Routes;