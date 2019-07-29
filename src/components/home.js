import React, { Component } from 'react'
import api from '../services/api'
import styled from 'styled-components'

const RepositoryList = styled.div`
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;
`

const Article = styled.article`
    background: #fff; 
    border: 1px #ddd solid; 
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`

const CreatedDate = styled.p`
    font-size: 16px;
    color: #999;
    margin-top: 5px 0;
    line-height: 24px;
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

    listRepositoryByYear = (key) => {
        let repos = this.state.repository.filter(item => item.created_at.slice(0,4) === key )
        return(
            repos.map(item => (
                <Article key={item.id}>
                    <strong>{item.name}</strong>
                    <CreatedDate>{item.created_at}</CreatedDate>
                </Article>
            ))
        )
    } 

  
    render(){
        const repository = this.state.repository
      
        const yearsRepository = repository.length ?  this.getTotalRepositoryYear(repository) : ''

        return (
            <RepositoryList>
                
                {
                    Object.keys(yearsRepository).map(key => (
                        <div key={key}>  
                            <strong>{key}</strong>
                            <p>{yearsRepository[key] <= 1 ?  `${yearsRepository[key]} Repositório criado` : `${yearsRepository[key]} Repositórios criados.`}</p>
                        </div>
                    )).reverse()
                }

{
                    Object.keys(yearsRepository).map(key => (
                        <div key={key}>  
                            <strong>{key}</strong>
                           {
                               this.listRepositoryByYear(key)
                           }
                        </div>
                    )).reverse()
                }
                            
                {/*
                   
                    repository.map(item => (
                        <Article key={item.id}>
                            <strong>{item.name}</strong>
                            <CreatedDate>{item.created_at}</CreatedDate>
                        </Article>
                        
                    ))*/
                }
            </RepositoryList>
        )
    }
}

export default Home