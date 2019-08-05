import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { searchRepository , handlerChanger} from '../store/actions/getRepository'

class NavBar extends Component{
    constructor(props){
        super(props)

        this.handlerSearch = this.handlerSearch.bind(this)
    }


    handlerSearch = (value) => {
        const { searchRepository } = this.props
        searchRepository(value)

   }


    render(){
        let {  handlerChanger, value } = this.props

        //const { data } = this.props.dataSearch.data
        return(
            <div className="navBar">
             
                <input type="search" onChange={handlerChanger} value={value || ''} className="input" placeholder="Search Github ..."></input>
                <button className="btn" onClick={() => this.handlerSearch(value)}>search</button>
            </div>
        )
    }
}


const mapDispatchProps = (dispatch) => bindActionCreators({ searchRepository, handlerChanger }, dispatch)
const mapStateToProps = (state) =>  ({
    dataRepository: state.repository.dataSearchRepository,
    value: state.repository.value,
    search: state.repository.search

})

export default connect(mapStateToProps, mapDispatchProps)(NavBar)