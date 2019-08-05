import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap')

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
		text-rendering: optimizeLegibility;
		margin: 0;
        font-family: 'Montserrat', "Segoe UI", "Helvetica", sans-serif;
        font-size: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
        background: #fafafa;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }
	.content{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    .App{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
    }
   
    #root > div:first-child { 
        height: 100%
    }

    .navBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 64px;
        padding-left: 60px;
        padding-right: 60px;
        background: #5A6170;
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

    h1, h2, h3, h4, h5{
        font-family: 'Montserrat', sans-serif; 
        color: #5A6170
    }

    .btn{
        background: #6C63DD;
        border: 0;
        padding: 10px 25px;
        border-radius: 50px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        margin-left: 5px
    }
    a{
        color: #9DA6B8; 
        text-decoration: none; 
        text-transform: uppercase; 
        font-weight: bold; 
        font-size: 10px; 
    }
    a.detail {
        position: absolute;
        right: 40px;
    }
    a.gitrepository{
        position: absolute;
        left: 10px;
    }
    `