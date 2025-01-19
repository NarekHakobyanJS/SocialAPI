import { SocialAPI } from "../api/api"

const LOGIN = 'login'
const ERROR_MESSAGE = 'ERROR_MESSAGE'
const USER_SESSION = 'USER_SESSION'

const initState = {
    userId: null,
    errorMessage : null,
    userSession : null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.payload
            }
        case ERROR_MESSAGE :
            return {
                ...state,
                errorMessage : action.payload
            }
        case USER_SESSION :
            return {
                ...state,
                userSession : action.payload
            }
        default:
            return state
    }
}

const loginAC = (data) => ({ type: LOGIN, payload: data })
const errorMessageAC = (data) => ({type : ERROR_MESSAGE, payload : data})
const authMeAC = (data) => ({type : USER_SESSION, payload : data})


export const authMeThunk = () => {
    return (disaptch) => {
        SocialAPI.authMe()
            .then((res) => {
                disaptch(authMeAC(res.data.data));
            })
    }
}
export const loginThunk = (email, password) => {
    return (disaptch) => {
        SocialAPI.login(email, password)
            .then((res) => {
                if(res.data.resultCode === 0){
                    disaptch(loginAC(res.data.data.userId))
                    disaptch(authMeThunk())
                }else {
                    disaptch(errorMessageAC(res.data.fieldsErrors))
                }
            })
    }
}

export default authReducer