import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components';
const GlobalStyleSideBar = createGlobalStyle`
    .navBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 64px;
        padding-left: 60px;
        padding-right: 60px;
    }

    .UserProfile > img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 4px solid #fff;
    }

    .input{
        padding: 10px;
        width: 100%;
        border: 1px #ddd solid;
        border-radius: 5px;
    }
`
class NavBar extends Component{
    render(){
        return(
            <div className="navBar">
                <GlobalStyleSideBar />
                <input type="search" className="input" placeholder="Search Github ..."></input>
            </div>
        )
    }
}

export default NavBar