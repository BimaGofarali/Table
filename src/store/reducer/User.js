import {LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from "../action/type"

const initialState = { isLoggedIn: false, loading: false, user: [], error: null };


const userData = (state = initialState, action) =>{
const {type, payload, error} = action;
switch(type){
    case LOGIN_BEGIN:
        return{
            ...state,
            loading: true,
            error: null
        };
    case LOGIN_SUCCESS:
        return{
            ...state,
            isLoggedIn: true,
            loading: false,
            user: payload,
            erorr: null
        };
    case LOGIN_FAIL:
        return{
        ...state,
        isLoggedIn:false,
        loading: false,
        error: error    
        };
        case LOGOUT:
            return {
              ...state,
              isLoggedIn: false,
              user: null,
              error: null,
            };
        default:
            return state;
}   
}

export default userData