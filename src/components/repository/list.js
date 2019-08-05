import React from 'react'

const list = ({total, ano, valor}) => {
    let porcentagem = `${valor * (100 / total )}%`

    return (
        <div style={{'margin': '20px 0px'}}>
            <span style={{'fontWeight': 'bold'}}>{ano} </span>
            <span style={{'float': 'right', 'fontWeight': 'bold'}}>{valor}</span>
            <span style={{
                "display": "block",
                "background": "#FAFAFA",
                "height": "3px",
                "overflow": "hidden"
            }}>
                <span style={{
                    "height": "3px",
                    "float": "left",
                    "backgroundImage": "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
                    'width': porcentagem
                    }}></span>
            </span>
                
        </div>

    )
}

export default list
