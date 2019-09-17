import React from 'react';
import { HeaderContainer, HeaderBackground, HeaderLogo, HeaderTitle, HeaderToolkit, HeaderWebLink } from './style.js'
import logo from './Logo 2_hi res.png';


const PageHeader = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderBackground>
                    <HeaderLogo>
                        <img src={logo} alt="Logo" height="122" width="122"/>
                    </HeaderLogo>
                    <HeaderTitle>
                        LA Food Council Policy Dashboard
                    </HeaderTitle>
                    <HeaderToolkit>
                        Toolkit
                    </HeaderToolkit>
                    <HeaderWebLink>
                    </HeaderWebLink>

                </HeaderBackground>

            </HeaderContainer>
        </div>

    )
}

export default PageHeader;