export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadDataFailure = () => {
    return {
        type: 'LOAD_DATA_FAILURE'
    }
}