import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
		text-rendering: optimizeLegibility;
		margin: 0;
        
        font-family: "Segoe UI", "Helvetica", sans-serif;
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
    }
    `