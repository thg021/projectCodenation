import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import axios from 'axios'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      repos: [], 
      total_count: 0
    } 
  }

  getRepositories(){
    axios.get('https://api.github.com/users/thg021/repos',{
      params: {
        sort: 'created' 
      }
    })
    .then(({ data }) => this.setState({repos: data }))
    .catch(e => {
      console.error('Deu ruim', e)
    })
  }

  componentDidMount(){
    this.getRepositories()
  }

  render() {
    const { repos } = this.state
    console.log(repos)
     return (
      <div className="App">
        <div>
          <p>Primeira chamadas</p>
        
            {console.log(this.state.repos)}
            {
              repos.map((item, key) => <li key={key}>{item.name}</li>)
            }
          
        </div>

      </div>
    );
  }
}

export default App;
