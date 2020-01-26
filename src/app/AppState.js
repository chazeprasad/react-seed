const AppAction = {
    REQUEST_LOAD_APP_CONFIG: '@@app/request-load-app-config',
    REQUEST_LOAD_APP_CONFIG_SUCCESS: '@@app/request-load-app-config-success',
    REQUEST_LOAD_APP_CONFIG_ERROR: '@@app/request-load-app-config-error',
}

const initialState = {
    config: {},
    loading: false,
    error: false
};

const AppReducer = (state = initialState, action) => {
    let newState = null

    switch (action.type) {
        case AppAction.REQUEST_LOAD_APP_CONFIG_SUCCESS:
            newState = {
                ...state,
                config: action.payload.config
            }
            break;
        case AppAction.REQUEST_LOAD_APP_CONFIG_ERROR:
            newState = {
                ...state,
                error: action.payload.error
            }
            break;
    
        default:
            newState = {
                ...state
            }
            break;
    }

    return newState
}

export {
    AppAction,
    AppReducer
}
