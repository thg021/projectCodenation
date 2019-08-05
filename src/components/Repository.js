import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ContentMain = styled.div`
    padding-left: 60px;
    padding-right: 50px;
    height: 100%;
    width: 100%;
    overflow: auto;
`

const RepositoryList = styled.div`
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap;
`

const Article = styled.article`
    background: #fff; 
    border: 1px #dadfea solid; 
    border-radius: 3px;
    padding: 20px;
    flex: 0 1 25%;
    margin: 0 5px 15px 5px;
    position: relative;`

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

const FooterLink = styled.div`
  
`


class Repository extends Component {

    listRepositoryByYear = () => {
       
        const { dataRepository } = this.props
        console.log('POSOJODSKfjl', dataRepository)
        return(
            dataRepository.map(item => (
                <Article key={item.id}>
                    <h3>{item.name}</h3>
                    <div>{item.language}</div>  
                    <CreatedDate>{item.created_at}</CreatedDate>
                    <Description>{item.description}</Description> 
                    <FooterLink> 
                        <a className='gitrepository' href={item.html_url} target='_blank'>git repository</a>
                        <Link className='detail' to={`/user/${item.name}`}>view detail</Link>       
                    </FooterLink>
                </Article>
            ))
        )
    } 

  
    render(){
        return (
            <ContentMain>
                <Title>Repositories {this.listRepositoryByYear().length}</Title>  
                <RepositoryList>  
                    {this.listRepositoryByYear()}
                </RepositoryList>
            </ContentMain>  
        )
    }
}

const mapStateToProps = (state) =>  ({
    user: state.user.user, 
    dataRepository: state.repository.dataRepository

})


export default connect(mapStateToProps)(Repository)