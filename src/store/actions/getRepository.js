import api from '../../services/api'

export const getRepository = (user) => {
    return dispatch => {
        api.get(`/users/${user}/repos`,{
            params: {
              sort: 'created', 
            }
          })
        .then( resp => dispatch({
            type: 'GET_REPOSITORY_SUCCESS', 
            data: resp.data,
            loading: false, 
            error: false, 
            change: false, 
            search: false,
            user
        }))
    }
}

export const searchRepository = (search) => {
    return dispatch => {
        api.get('/search/repositories',{
            params: {
              q: search, 
            }
          })
        .then( resp => dispatch({
            type: 'SEARCH_REPOSITORY_SUCCESS', 
            dataSearch: resp,
            search: true
        }))
    }
}


export const handlerChanger = e => {
    return {
        type: 'INPUT_SEARCH_CHANGE', 
        payload: e.target.value, 
    }
}
