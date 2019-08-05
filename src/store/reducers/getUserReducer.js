const INITIAL_STATE = {
    data: [],
    loading: false, 
    error: false, 
    user: '', 
    change: true
}


export default function getUser(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'INPUT_USER_CHANGE':
            return {
                user: action.payload, 
                change: true
            }
        case 'GET_USER_INIT':
            return {
                data: [],
                loading: true, 
                error: false, 
                change: false
            }
        case 'GET_USER_SUCCESS': 
            return{
                data: action.data, 
                loading: false, 
                error: false, 
                user: action.user,
                change: false
            }
        case 'GET_USER_ERROR': 
            return {
                data: [], 
                loading: false, 
                error: true, 
                user: '', 
                change: false
            }
        default: return state
    }

}