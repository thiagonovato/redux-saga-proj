const INICIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = INICIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_UA_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }

    if (action.type === 'LOAD_DATA_UA_SUCCESS') {
        return {
            isFetching: false,
            data: action.data,
            error: false
        }
    }
    return state
}

export default ua