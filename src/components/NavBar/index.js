import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <hr/>
            This is the navbar....
             - 
            <Link to={ROUTES.HOME}>Home</Link>
             - 
            <Link to={ROUTES.HEALTHY_CONTAINER}>Healthy</Link>
             - 
            <Link to={ROUTES.SUSTAINABLE_CONTAINER}>Sustainable</Link>
             - 
            <Link to={ROUTES.AFFORDABLE_CONTAINER}>Affordable</Link>
             - 
            <Link to={ROUTES.FAIR_CONTAINER}>Fair</Link>
            <hr/>
        </div>
    )
}

export default withRouter(NavBar);