const INITIAL_STATE = {
    data: [],
    loading: false, 
    error: false
}

export default function getUser(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'GET_USER_INIT':
            return {
                data: [],
                loading: true, 
                error: false
            }
        case 'GET_USER_SUCCESS': 
            return{
                data: action.data, 
                loading: false, 
                erro: false
            }
        case 'GET_USER_ERROR': 
            return {
                data: [], 
                loading: false, 
                erro: true
            }
        default: return state
    }

}