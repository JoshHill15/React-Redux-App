import { FETCH_FOX_START, FETCH_FOX_SUCCESS , FETCH_FOX_FAILURE } from "../actions/action"

const initialState = {
    isFetching: false,
    error: "",
    foxes: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FOX_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_FOX_SUCCESS:
            return {
                ...state,
                isFetching: false,
                foxes: action.payload
            }
        case FETCH_FOX_FAILURE:
            return {
                ...state,
                err: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}