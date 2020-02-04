const AppAction = {
    REQUEST_GET_APP_CONFIG: '@@app/request-get-app-config',
    REQUEST_GET_APP_CONFIG_SUCCESS: '@@app/request-get-app-config-success',
    REQUEST_GET_APP_CONFIG_ERROR: '@@app/request-get-app-config-error',
}

const initialState = {
    config: {},
    loading: false,
    error: false,
}

const AppReducer = (state = initialState, action) => {
    let newState = null

    switch (action.type) {
        case AppAction.REQUEST_GET_APP_CONFIG_SUCCESS:
            newState = {
                ...state,
                config: action.payload.config,
            }
            break
        case AppAction.REQUEST_GET_APP_CONFIG_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
            }
            break

        default:
            newState = {
                ...state,
            }
            break
    }

    return newState
}

export { AppAction, AppReducer }
