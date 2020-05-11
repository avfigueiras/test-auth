import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../header';
import {routes} from './Private';

const Routes = () => {
    
    return (
        <Router>
                <Header/>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        {routes.map((route, i)=>
                            <Route
                                exact
                                key={i}
                                path={route.path}
                                component={route.component}
                            />)}
                    </Switch>
                </Suspense>
        </Router>
    )
}

export default Routes;