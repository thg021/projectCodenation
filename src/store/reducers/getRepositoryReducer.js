const INITIAL_STATE = {
    dataRepository: [],
    loading: false, 
    error: false, 
    search: false,
    dataSearchRepository: [], 
    value: ''
}


export default function getRepository(state = INITIAL_STATE, action){
    switch (action.type) {

        case 'GET_REPOSITORY_SUCCESS': 
            return{
                ...state,
                dataRepository: action.data, 
                loading: false, 
                error: false
            }
        case 'SEARCH_REPOSITORY_SUCCESS': 
            return {
                ...state, 
                dataSearchRepository: action.dataSearch, 
                search: true
            }
        case 'INPUT_SEARCH_CHANGE': 
            return {
                ...state, 
                value: action.payload
            }
        default: return state
    }

}