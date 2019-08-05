import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux'
import Resume from './repository/resume'



const GlobalStyleSideBar = createGlobalStyle`
    .sideBar {
        width: 300px;
        height: 100%;
        flex-shrink: 0;
        overflow-x: hidden;
        text-align: center;
        padding:15px;
        background: #fff;
        -webkit-box-shadow: 12px -3px 23px -22px rgba(82,82,82,1);
        -moz-box-shadow: 12px -3px 23px -22px rgba(82,82,82,1);
        box-shadow: 12px -3px 23px -22px rgba(82,82,82,1);
    }

    .UserProfile > img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 4px solid #fff;
    }

    .UserProfile > h3 {
        font-size: 18px;
        line-height: 20px;
        margin-top: 14px;
        text-align: center !important;
    }

    .gitUser {
        color: #9E9E9E;
    }

    .text-muted {
        color: #6c757d!important;
    }

    .resumeRepositories > h3{
        margin: 35px 0 20px;
    }

    .resumeRepositories > div{
        text-align: left
    }

    .resumeRepositories > div > p{
        margin-bottom: 15px;
    }

    .resume{
        margin-top: 15px
    }
`

class SideBar extends Component{


    render(){
      
        let { avatar_url, name, login } = this.props.data
        const { user } = this.props.user


        return(
        <div>
            <GlobalStyleSideBar />

            <div className='sideBar'>
                <div className="UserProfile">
                    <img src={avatar_url}  alt='Smiley face'/>
                    <h3>{name}</h3>
                    <p className="gitUser">{login}</p>


                   <div className="resumeRepositories">
                        <h3>Repository resume</h3>
                        <div><Resume user={user}/></div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.user.data,
        loading: state.user.loading, 
        error: state.user.error, 
        user: state.user.user
    }
     
}


export default connect(mapStateToProps, null)(SideBar)