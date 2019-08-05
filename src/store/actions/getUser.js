import api from '../../services/api'


export const getUserInit = () =>{
    return{
        type: 'GET_USER_INIT', 
        loading: true, 
        error: false, 
        change: false
    }
}

export const getUserSuccess = (data, user) => {
    return{
        type: 'GET_USER_SUCCESS', 
        data, 
        loading: false, 
        error: false, 
        change: false, 
        user
    }
}

export const getUserError = () => {
    return {
        type: 'GET_USER_ERROR', 
        loading: false, 
        error: true, 
        change: false
    
    }
}

export const changeUser = e => {
    return {
        type: 'INPUT_USER_CHANGE', 
        payload: e.target.value, 
        change: true
    }
}

/*export const getUser = (user) => {
    console.log('Usuario pesquisado', user)
    return dispatch => {
        dispatch(getUserInit(user))
        api.get(`/users/${user}`)
        .then((response) => dispatch(getUserSuccess(response.data, user)))
        .catch(() => dispatch(getUserError()))
    }
}
*/


export const getUser = (user) => {
    return dispatch => {
        api.get(`/users/${user}`)
        .then( resp => dispatch({
            type: 'GET_USER_SUCCESS', 
            data: resp.data,
            loading: false, 
            error: false, 
            change: false, 
            user
        }))
    }
}
