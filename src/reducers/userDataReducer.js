import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    user: {},
    isFetching: false,
    error: null
}

const userDataReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.GET_USER_ACTION: {return state;}
        case ACTION_TYPES.GET_USER_REQUEST: { 
            return {...state, isFetching: true, error: null}
        }
        case ACTION_TYPES.GET_USER_SUCCESS: {
            const {user} = action;
            return {...state, user, isFetching: false, error: null}
        }
        case ACTION_TYPES.GET_USER_ERROR: {
            const {error} = action;
            return {...state, error, isFetching: false}
        }
        default: return state;
    }
}

export default userDataReducer;