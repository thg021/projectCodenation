import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Repository from './Repository'
import SeachRepository from './SearchRepository'

import { connect } from 'react-redux'
import GlobalStyle from '../styles/global'

const Main = (props) => {

  console.log(props)
  let { dataRepository, value} = props
  console.log("teste", dataRepository.data)
  return (
    <div className="App">
        <GlobalStyle />   
        <SideBar />
        <div className="content">
            <NavBar />
            {value === '' ? <Repository /> :  <SeachRepository data={dataRepository.data}/>}           
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>  ({
  dataRepository: state.repository.dataSearchRepository, 
  value: state.repository.value
})



export default connect(mapStateToProps, null)(Main)