import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;