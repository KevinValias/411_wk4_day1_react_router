import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car'



 
function Router() {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/car/:id' component=
                {Car}/>
            </Switch>
        </div>
    );
}
        






export default Router;
