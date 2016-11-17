const INITIAL_STATE = { userData: {}, repos: [] };

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'FETCH_DATA':
            return {...state, userData: action.payload.data};
        case 'FETCH_REPOS':
            return {...state, repos: action.payload.data};
        default:
            return state;
    }

}