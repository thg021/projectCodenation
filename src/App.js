import React, { Component } from 'react'
import GlobalStyle from './styles/global'
import Home from './components/home'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'

class App extends Component {

  render() {
     return (
      <div className="App" >
        <GlobalStyle />   
          <SideBar />
          <div className="content">
            <NavBar />
            <Home />
          </div>
      </div>
    
    );
  }
}

export default App;
