const INICIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = INICIAL_STATE, action) => {
    if (action.type === 'LOAD_UA_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    return state
}

export default ua