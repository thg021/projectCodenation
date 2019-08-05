import React, {Component} from 'react'
import GlobalStyle from '../../styles/global'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeUser, getUser } from '../../store/actions/getUser'
import { Redirect } from 'react-router-dom'


class NavBar extends Component {
   constructor(props){
       super(props)
       this.handlerSearch = this.handlerSearch.bind(this)
   }

   

   handlerSearch = (user) => {
        const { getUser} = this.props
        getUser(user)

   }

    render(){
        let { user, changeUser, error, change} = this.props

        if(!change){
            if(error){
                alert('user not found')
            }else{
                return <Redirect to='/user' />
            }
        }
        return (
            <div>
                <GlobalStyle />   
                <div className="navBar">     
                    <input id='user' 
                        type='text' 
                        value={user || ''} 
                        onChange={changeUser}
                        className="input" 
                        placeholder="Search user ..."
                    />
                    <button className="btn" onClick={() => this.handlerSearch(user)} >search</button>
                </div>
    
              
            </div>
        )
        
    }
}


const mapStateToProps = (state) =>  ({
    user: state.user.user,
    data: state.user.data, 
    loading: state.user.loading, 
    error: state.user.error,
    change: state.user.change
})
const mapDispatchProps = (dispatch) => bindActionCreators({ changeUser, getUser }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(NavBar)
