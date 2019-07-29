import React, { Component } from 'react'
import Request from '../rest/Request'


class Home extends Component {

    render(){
        return (
            <div>
               <Request  url={'https://api.github.com/users/thg021/repos'} config={ {method:"get", params: {
        sort: 'created', 
        direction: 'asc'
      }} } render={ response => 
                    {
                        
                        console.log(response.data)
                        return (
                            <div className="grid-cards">
                                <ul>
                                    {response.data.map((item, key) => <li key={key}>{item.name}</li>)}
                                </ul>
                            </div>
                        )
                    }
                } />
                
            </div>
        )
    }
}

export default Home