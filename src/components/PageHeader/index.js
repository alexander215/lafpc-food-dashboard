import React from 'react';
import { HeaderContainer, HeaderBackground, LeftHalf, RightHalf, HeaderLogo, HeaderTitle, HeaderToolkit, HeaderWebLink } from './style.js'
import logo from './Logo 2_hi res.png';


const PageHeader = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderBackground>
                    <LeftHalf>
                        <HeaderLogo>
                            <img src={logo} alt="Logo" height="122" width="122"/>
                        </HeaderLogo>
                        <HeaderTitle>
                            LA Food Council Policy Dashboard
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