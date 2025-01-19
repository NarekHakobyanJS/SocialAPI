import { SocialAPI } from "../api/api"

const GET_ALL_USERS = 'GET_ALL_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const IS_FETCHING = 'IS_FETCHING'

const initState = {
    users: [],
    page : 1,
    count : 100,
    totalCount : 10000,
    isFetching : false
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case CHANGE_PAGE : 
            return {
                ...state,
                page : action.payload
            }
        case IS_FETCHING : 
            return {
                ...state,
                isFetching : action.payload
            }
        default:
            return state
    }
}

const getAllUsersAC = (users) => ({ type: GET_ALL_USERS, payload: users })
export const changePageAC = (page) => ({type : CHANGE_PAGE, payload : page})
const isFetchingAC = (isFetching) => ({type : IS_FETCHING, payload : isFetching})

export const getAllUsersThunkCreator = (page, count) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        SocialAPI.getUsers(page, count)
            .then((res) => {
                dispatch(getAllUsersAC(res.data.items))
                dispatch(isFetchingAC(false))
            })
    }
}
export default usersReducer