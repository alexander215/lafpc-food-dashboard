import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    height: 50px;
`
export const Link = styled(NavLink)`
    color: #F9F9F3;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Avenir Next;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    left: 26.39%;
    right: 26.39%;
    top: 22%;
    bottom: 24%;
    
`
export const NavRectangleLeft = styled.div`
    background-color: #52BAAF;
    width: 25%;
    padding: 10px;
    &:hover {
            transform: translateY(-3px);
            box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    }
    &:active {
        transform: translateY(1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
    }
    a:link {
        text-decoration: none;
        color: #F9F9F3;
    }
    a:visited {
        text-decoration: none;
        color: #F9F9F3;
        }
`
export const NavRectangleMiddleLeft = styled.div`
    background-color: #79B353;
    width: 25%;
    padding: 10px;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    }
    &:active {
        transform: translateY(1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
    }
    a:link {
        text-decoration: none;
        color: #F9F9F3;
    }
    a:visited {
        text-decoration: none;
        color: #F9F9F3;
        }
`
export const NavRectangleMiddleRight = styled.div`
    background-color: #F59135;
    width: 25%;
    padding: 10px;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    }
    &:active {
        transform: translateY(1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
    }
    a:link {
        text-decoration: none;
        color: #F9F9F3;
    }
    a:visited {
        text-decoration: none;
        color: #F9F9F3;
        }
`
export const NavRectangleRight = styled.div`
    background-color: #FCD243;
    width: 25%;
    padding: 10px;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    }
    &:active {
        transform: translateY(1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
    }
    a:link {
        text-decoration: none;
        color: #F9F9F3;
    }
    a:visited {
        text-decoration: none;
        color: #F9F9F3;
        }
`