const AlertReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'SET_ALERT':
            return action.paylaod
        case 'REMOVE_ALERT':
            return null
        default:
            return state
    }
}

export default AlertReducer