import React from 'react';
import logo from './images/LAFPC_logo_1.png'
import instagramLogo from './images/InstaLogo2.png'
import twitterLogo from './images/TwitterLogo.svg'
import facebookLogo from './images/FacebookLogo.svg'
import { 
    FooterCopy,
    Logo,
    FooterDiv, 
    SocialMediaDiv,
    SocialMediaImg
} from './style'

const Footer = () => {
    return (
        <FooterDiv>
            <Logo img src={logo}></Logo>
            <FooterCopy>
            Copyright © 2019 Los Angeles Food Policy Council. All Rights Reserved
            </FooterCopy>
            <SocialMediaDiv>
                <SocialMediaImg>
                    <a 
                        href='http://www.facebook.com/LosAngelesFoodPolicyCouncil'
                        target="_blank"
                    >
                        <img 
                            src={facebookLogo} 
                            alt='Facebook Logo'>
                        </img> 
                    </a>
                </SocialMediaImg>
                <SocialMediaImg>
                    <a 
                        href='https://twitter.com/GoodFoodLA'
                        target="_blank"
                    >
                        <img 
                            src={twitterLogo} 
                            alt='Twitter Logo'>
                        </img> 
                    </a>
                </SocialMediaImg>
                <SocialMediaImg>
                    <a 
                        href='http://instagram.com/lagoodfood'
                        target="_blank"
                    >
                        <img 
                            src={instagramLogo} 
                            alt='Instagram Logo'>
                        </img> 
                    </a>
                </SocialMediaImg>
            </SocialMediaDiv>
        </FooterDiv>
    )
}

export default Footer;