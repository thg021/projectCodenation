import React, { Component } from 'react'

import List from './list'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRepository } from '../../store/actions/getRepository'

class Resume extends Component {
    constructor(props){
        super(props)

        this.buscarRepositiorios = this.buscarRepositiorios.bind(this)
    }

    componentWillMount(){
        const { user, getRepository } = this.props
        console.log(user)
        getRepository(user)
    }



    buscarRepositiorios(){
        const { dataRepository } = this.props
        const total = dataRepository.length
     
        let repositoryDate = dataRepository.reduce((total, item) => {    
           let itemSelect =  item.created_at.slice(0,4)
            if ( !total[itemSelect] ) {
                total[itemSelect]=1;
             }else{
                 total[itemSelect]++
             }
     
            return total
        }, {})

        const dados = Object.keys(repositoryDate).map(key => (
            <List key={key} ano={key} valor={repositoryDate[key]} total={total}/>
        )).reverse()

        return dados
    }

    render(){

        this.buscarRepositiorios()

        return (
            <div>
               List of repositories created by year.
               <div>
               {this.buscarRepositiorios()}
               </div>
            </div>
          ) 
    }

}

const mapDispatchProps = (dispatch) => bindActionCreators({ getRepository }, dispatch)
const mapStateToProps = (state) =>  ({
    user: state.user.user, 
    dataRepository: state.repository.dataRepository

})

export default connect(mapStateToProps, mapDispatchProps)(Resume)

