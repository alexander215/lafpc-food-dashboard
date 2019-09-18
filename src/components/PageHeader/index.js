import React from 'react';
import { HeaderContainer, HeaderBackground, LeftHalf, RightHalf, HeaderLogo, HeaderTitle, HeaderToolkit, HeaderWebLink } from './style.js'
import logo from './Logo 2_hi res.png';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes.js';


const PageHeader = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderBackground>
                    <LeftHalf>
                        <HeaderLogo>
                            <Link to={ROUTES.HOME}>
                                <img src={logo} alt="Logo" height="122" width="122"/>
                            </Link>
                        </HeaderLogo>
                        <HeaderTitle>
                            LA Food Policy Council Dashboard
                        </HeaderTitle>
                    </LeftHalf>
                    <RightHalf>
                        <HeaderToolkit>
                            <a href="#">Toolkit</a>
                        </HeaderToolkit>
                        <HeaderWebLink>
                            <a href="https://www.goodfoodla.org/" target="_blank">goodfoodla.com</a>
                        </HeaderWebLink>
                    </RightHalf>
                </HeaderBackground>
            </HeaderContainer>
        </div>

    )
}

export default PageHeader;