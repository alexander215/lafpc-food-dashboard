import React from 'react';
import logo from './images/LAFPC_logo_1.png'
import instagramLogo from './images/InstaLogo.svg'
import twitterLogo from './images/TwitterLogo.svg'
import facebookLogo from './images/FacebookLogo.svg'
import { 
    FooterCopy,
    Logo,
    FooterDiv, 
    SocialMediaDiv
} from './style'

const Footer = () => {
    return (
        <FooterDiv>
            <Logo img src={logo}></Logo>
            <FooterCopy>
            Copyright © 2019 Los Angeles Food Policy Council. All Rights Reserved
            </FooterCopy>
            <SocialMediaDiv>
                <a 
                    href='http://www.facebook.com/LosAngelesFoodPolicyCouncil'>
                    <img src={facebookLogo} alt='Facebook Logo'></img> 
                </a>
                <a href='https://twitter.com/GoodFoodLA'> img src={twitterLogo}></a>
                <a href='http://instagram.com/lagoodfood'> img src={instagramLogo}>

                </a>
            </SocialMediaDiv>
        </FooterDiv>
    )
}

export default Footer;