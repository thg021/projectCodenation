import React, { Component } from 'react'
import api from '../services/api'
import styled from 'styled-components'

const RepositoryList = styled.div`
    padding-left: 60px;
    padding-right: 50px;
    height: 100%;
    width: 100%;
    overflow: auto;
`

const Article = styled.article`
    background: #fff; 
    border: 1px #ddd solid; 
    border-radius: 5px;
    padding: 20px;
    flex: 0 1 32%;
    margin: 0 5px 15px 5px;`

const CreatedDate = styled.p`
    font-size: 12px;
    color: #999;
    margin-top: 0;
    line-height: 24px;

`

const Description = styled.p`
    margin-top: 15px
`

const Title = styled.h2`
    margin: 10px 0 15px; 

`


class Home extends Component {

   state = {
        repository: []
    }

    componentDidMount(){
        this.loadRepositories()
    }

    loadRepositories = async () => {
        try {
            const response = await api.get('/users/thg021/repos',{
                params: {
                  sort: 'created'
                }
              })
             this.setState({repository: response.data})
             console.log(response.data)
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

        return repositoryDate
    }

    /*listRepositoryByYear = (key) => {
        let repos = this.state.repository.filter(item => item.created_at.slice(0,4) === key )
        return(
            repos.map(item => (
                <Article key={item.id}>
                    <strong>{item.name}</strong>
                    <CreatedDate>{item.created_at}</CreatedDate>
                </Article>
            ))
        )
    } */

    listRepositoryByYear = () => {
        console.log(this.state.repository)
        return(
            this.state.repository.map(item => (
                <Article key={item.id}>
                    <h3>{item.name}</h3>
                    <CreatedDate>{item.created_at}</CreatedDate>
                    <Description>{item.description}</Description>
                    
                </Article>
            ))
        )
    } 

  
    render(){
        //const repository = this.state.repository
      
        //const yearsRepository = repository.length ?  this.getTotalRepositoryYear(repository) : ''

        return (
            <RepositoryList>
<<<<<<< HEAD
                <h1>Lista 1</h1>
                {
=======
                <Title>Repositories</Title>
                {/*
>>>>>>> 25484f6168ded655ee64bffe1dbe9c396b3cd20f
                    Object.keys(yearsRepository).map(key => (
                        <div key={key}>  
                            <strong>{key}</strong>
                            <p>{yearsRepository[key] <= 1 ?  `${yearsRepository[key]} Repositório criado` : `${yearsRepository[key]} Repositórios criados.`}</p>
                        </div>
                    )).reverse()
<<<<<<< HEAD
                }
                <h1>Lista 2</h1>
                {
                    Object.keys(yearsRepository).map(key => (
                        <div key={key}>  
                            <h2>{key}</h2>
                           {
                               this.listRepositoryByYear(key)
                           }
                        </div>
                    )).reverse()
                }

=======
                    */}

                {
                    <div style={{"display": "flex", "flexFlow": "row wrap"}}> {this.listRepositoryByYear()}</div>

                    }
                            
                {/*
                   
                    repository.map(item => (
                        <Article key={item.id}>
                            <strong>{item.name}</strong>
                            <CreatedDate>{item.created_at}</CreatedDate>
                        </Article>
                        
                    ))*/
                }
>>>>>>> 25484f6168ded655ee64bffe1dbe9c396b3cd20f
            </RepositoryList>
        )
    }
}

export default Home