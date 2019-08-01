import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components';
import api from '../services/api'

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

    state = {
        repository: [], 
        avatar: '', 
        user: '', 
        login: ''
    }

    componentDidMount(){
        this.loadRepositories()
        this.loadUserInfo()
    }

    loadRepositories = async () => {
        try {
            const response = await api.get('/users/thg021/repos',{
                params: {
                  sort: 'created'
                }
              })
             this.setState({repository: response.data, 
                avatar: response.data[0].owner.avatar_url
            })
              console.log('side', response.data[0].owner.avatar_url)
              

        } catch (error) {
            console.log(error)
        }

       
    }

    loadUserInfo = async () => {
        try {
            const response = await api.get('/users/thg021')
            const user = response.data.name
            const avatar = response.data.avatar_url
            const login = response.data.login
     
              this.setState({
                  user, 
                  avatar, 
                  login
              })
              

        } catch (error) {
            console.log(error)
        }

       
    }

    getTotalRepositoryYear = (repository) => {
        let repositoryDate = repository.map(item => {      
            return item.created_at.slice(0,4)
        }).reduce((obj, item) => {
            if ( !obj[item] ) {
                obj[item]=1;
             }else{
                 obj[item]++
             }
            return obj
        },{})
        for(let teste in repositoryDate){
           console.log('Aqui',teste, repositoryDate[teste])       
        }
     
        return repositoryDate
    }


    render(){
        const repository = this.state.repository
      
        const yearsRepository = repository.length ?  this.getTotalRepositoryYear(repository) : ''

        return(
        <div>
            <GlobalStyleSideBar />
            <div className='sideBar'>
                <div className="UserProfile">
                    <img src={this.state.avatar}  alt='Smiley face'/>
                    <h3>{this.state.user}</h3>
                    <p className="gitUser">{this.state.login}</p>
                    <div className="resume">
                        Front-end developer, ReactJs,Redux, Javascript and NodeJs
                    </div>

                    <div className="resumeRepositories">
                        <h3>Resume repository</h3>
                           {
                                Object.keys(yearsRepository).map(key => (
                                <div key={key}>  
                                    <h4>{key}</h4>
                                    <p>{yearsRepository[key] <= 1 ?  `${yearsRepository[key]} Repository created.` : `${yearsRepository[key]} Repositories created.`}</p>
                                </div>
                            )).reverse()
                            }

                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}

export default SideBar