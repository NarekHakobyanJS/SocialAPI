import { SocialAPI } from "../api/api"
const GET_PROFILE = "GET_PROFILE"
const GET_STATUS = 'GET_STATUS'
const IS_FETCHING = 'IS_FETCHING'

const initState = {
    profile: null,
    status: '',
    isFetching: false,
}

const profileRedcuer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

const getProfileAC = (profile) => ({ type: GET_PROFILE, payload: profile })
const getProfileStatusAC = (status) => ({ type: GET_STATUS, payload: status })
const isFetchingAC = (isFetching) => ({ type: IS_FETCHING, payload: isFetching })


export const changeStatusThunk = (newStatus, id) => {
    return (dispatch) => {
        SocialAPI.changeStatus(newStatus)
            .then(() => {
                dispatch(getPrfoileStatusThunk(id))
            })
    }
}
export const getProfileThunk = (id) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        SocialAPI.getUserProfile(id)
            .then((res) => {
                dispatch(isFetchingAC(false))
                dispatch(getProfileAC(res.data))
            })
    }
}

export const getPrfoileStatusThunk = (id) => {
    return (dispatch) => {
        SocialAPI.getUserStatus(id)
            .then((res) => {
                dispatch(getProfileStatusAC(res.data))
            })
    }
}

export const changeProfilePhotoThunk = (file, id) => {
    return (dispatch) => {
        SocialAPI.changeProfilePhoto(file, id).
            then(() => {
                dispatch(getProfileThunk(id))
            })
    }
}

export default profileRedcuer