import styled from 'styled-components';
import img from './erol-ahmed-407736.jpg'


export const HeaderContainer = styled.div`
    height: 122px;
    `
export const HeaderBackground = styled.div`
    background-image: url(${img});
    background-position: center;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    a:link {
        text-decoration: none;
        color: #F9F9F3;
      }
    a:visited {
        text-decoration: none;
        color: #F9F9F3;
        }
    
    a:hover {
        text-decoration: underline;
        }


    `

export const HeaderLogo = styled.div`
    
`
export const LeftHalf = styled.div`
    display: flex;
    justify-content: space-between;
    width: 52%;

    margin: 0 0 0 4%;
`

export const RightHalf = styled.div`
    display: flex;
    margin: 0 4% 0 0;
    width: 21%;
    justify-content: space-between;
`

export const HeaderTitle = styled.div `
    margin: 37px 0;
    font-family: Helvetica Neue;
    font-size: 36px;
    line-height: 44px;
    color: #F9F9F3;
`

export const HeaderToolkit = styled.div`
    margin: 47.5px 0;
    font-family: Avenir Next;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #F9F9F3;
`

export const HeaderWebLink = styled.div`
    margin: 47.5px 0;
    font-family: Avenir Next;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #F9F9F3;
`
