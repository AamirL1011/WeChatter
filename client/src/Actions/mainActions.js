// Updates the state of the application
export const updateMainState = (payload) => {
    return (dispatch) => {
        dispatch({ type: "SET_MAIN_STATE", payload: payload });
    }
}
