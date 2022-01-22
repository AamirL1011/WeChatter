const initialState = {
    showMain: false,
};


const appStateReducer = (currentState = initialState, action) => {
    let newState = currentState;
    switch(action.type) {
        case "SET_MAIN_STATE": {
            return {
                ...newState,
                showMain: action.payload,
            }
        }
        default:
            return newState
    }
}

export default appStateReducer;