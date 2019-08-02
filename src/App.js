import React, { Component } from 'react'
import GlobalStyle from './styles/global'
import Home from './components/home'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {

  render() {
     return (
      <Provider store={store}>
        <div className="App" >
          <GlobalStyle />   

            <SideBar />
            <div className="content">
              <NavBar />
              <Home />
            </div>

        </div>
      </Provider>
    );
  }
}

export default App;
