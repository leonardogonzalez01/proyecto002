import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = props => {
    console.log(props);
    const {
        component: Component,
        isLoggedIn,
        ...rest
    } = props;
    return (
        <Route
            {...rest}
            render={props => {
                if (isLoggedIn) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login'/>
                }
            }}
        />
    )
};