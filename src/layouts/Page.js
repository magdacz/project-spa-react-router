import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';


const Page = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/products' component={ProductPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/admin' component={AdminPage} />
                <Route component={ErrorPage} />
            </Switch>
        </React.Fragment>
    )
}

export default Page;