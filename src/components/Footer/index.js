import React from 'react';
import img from './LAFPC_logo_1.png'
import { 
    // FooterLeft,
    // FooterCenter,
    // FooterRight,
    FooterCopy,
    Logo,
    FooterDiv, 
    SocialMediaDiv
} from './style'

const Footer = () => {
    return (
        <FooterDiv>
            {/* <FooterLeft> */}
                <Logo img src={img}></Logo>
            {/* </FooterLeft> */}
            {/* <FooterCenter> */}
                <FooterCopy>
                Copyright © 2019 Los Angeles Food Policy Council. All Rights Reserved
                </FooterCopy>
                <SocialMediaDiv></SocialMediaDiv>
            {/* </FooterCenter> */}

        </FooterDiv>
    )
}

export default Footer;