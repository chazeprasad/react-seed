const initialState = {
    name: 'Home'
}

const HomeReducer = (state = initialState, action) => {
    let newState = null;
    
    newState = {...state}

    return newState
}

export {
    HomeReducer
}