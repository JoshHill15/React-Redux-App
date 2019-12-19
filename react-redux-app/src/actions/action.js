import axios from "axios"

export const FETCH_FOX_START = "FETCH_FOX_START"
export const FETCH_FOX_SUCCESS = "FETCH_FOX_SUCCESS"
export const FETCH_FOX_FAILURE = "FETCH_FOX_FAILURE"

export const getFoxes = () => dispatch => {
    dispatch({ type: FETCH_FOX_START })
    axios.get('https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_FOX_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log("err", err)
        dispatch({ type: FETCH_FOX_FAILURE, payload: err.message })
    })
}