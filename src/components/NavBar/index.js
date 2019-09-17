import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { 
    NavRectangleLeft, 
    NavRectangleMiddleLeft,
    NavRectangleMiddleRight,
    NavRectangleRight,
    NavContainer,
    Link
} from './style.js';

const NavBar = () => {
    return (
        <div>
            <NavContainer>
                <NavRectangleLeft>
                    <Link exact to={ROUTES.HEALTHY_CONTAINER}>Healthy</Link>
                </NavRectangleLeft>
                <NavRectangleMiddleLeft>
                    <Link exact to={ROUTES.SUSTAINABLE_CONTAINER}>Sustainable</Link>
                </NavRectangleMiddleLeft>
                <NavRectangleMiddleRight>
                    <Link to={ROUTES.AFFORDABLE_CONTAINER}>Affordable</Link>
                </NavRectangleMiddleRight>
                <NavRectangleRight>
                    <Link to={ROUTES.FAIR_CONTAINER}>Fair</Link> 
                </NavRectangleRight>
            </NavContainer>
        </div>
    )
}

export default withRouter(NavBar);