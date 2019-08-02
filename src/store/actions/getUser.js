import api from '../../services/api'
import { dispatch } from 'rxjs/internal/observable/pairs';


export const getUserInit = () =>{
    return{
        type: 'GET_USER_INIT', 
        loading: true, 
        error: false
    }
}

export const getUserSuccess = (data) => {
    return{
        type: 'GET_USER_SUCCESS', 
        data, 
        loading: false, 
        error: false
    }
}

export const getUserError = () => {
    return {
        type: 'GET_USER_ERROR', 
        loading: false, 
        error: true
    }
}

export const getUser = (user) => {
    return dispatch => {
        dispatch(getUserInit())
        api.get(`/users/${user}`)
        .then((response) => dispatch(getUserSuccess(response.data)))
        .catch(() => dispatch(getUserError()))
    }
}