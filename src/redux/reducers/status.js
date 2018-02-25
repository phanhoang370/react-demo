var initialState     = false;
var myReducer = (state =initialState, action) => {
    if(action.type === 'toggle_status') {
        state = !state;
        return state;
    }

    return state;
}

export default myReducer;