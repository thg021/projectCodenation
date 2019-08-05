import React, { Component } from 'react'
import { connect } from 'react-redux'

class SeachRepository extends Component {

  render() {

    let data = this.props.data || []
    console.log('searchRepository', data)
    if (!data.total_count){
      return ( <div>Aguardando</div>)
    }
    return (
      <div>
        Busca de repositorios
      </div>
    )
  }
}


const mapStateToProps = (state) =>  ({
  dataRepository: state.repository
})

export default connect(mapStateToProps, null)(SeachRepository)