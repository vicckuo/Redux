import { SET_ACCOUNT, SET_PASSWORD } from "../actions/login";

const initLoginInfo = {
    account: '',
    password: '',
}

export const loginReducer = function (state = initLoginInfo, action) {
    const stateNext = Object.assign({}, state)
    switch (action.type) {
        case SET_ACCOUNT:
            stateNext.account = action.value
            return stateNext
        case SET_PASSWORD:
            stateNext.password = action.value
            return stateNext
        default:
            return state
    }
}