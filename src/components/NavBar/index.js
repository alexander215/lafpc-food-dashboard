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

const NavBar = ({handleValueClick, activeHeader}) => {
    return (
        <div>
            <NavContainer>
                <NavRectangleLeft>
                    <Link 
                        exact to={ROUTES.HEALTHY_CONTAINER}
                        onClick={handleValueClick}
                        active={activeHeader}
                    >
                    Healthy
                    </Link>
                </NavRectangleLeft>
                <NavRectangleMiddleLeft>
                    <Link 
                        exact to={ROUTES.SUSTAINABLE_CONTAINER}
                        onClick={handleValueClick}
                        active={activeHeader}
                    >
                    Sustainable
                    </Link>
                </NavRectangleMiddleLeft>
                <NavRectangleMiddleRight>
                    <Link 
                        exact to={ROUTES.AFFORDABLE_CONTAINER}
                        onClick={handleValueClick}
                        active={activeHeader}
                    >
                    Affordable
                    </Link>
                </NavRectangleMiddleRight>
                <NavRectangleRight>
                    <Link 
                        exact to={ROUTES.FAIR_CONTAINER}
                        onClick={handleValueClick}
                        active={activeHeader}
                    >
                    Fair
                    </Link> 
                </NavRectangleRight>
            </NavContainer>
        </div>
    )
}

export default withRouter(NavBar);