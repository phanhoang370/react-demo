var initialState     = {
    status:false,
    sort:{
        by:'name',
        value: 1
    }
}
var myReducer = (state =initialState, action) => {
    if(action.type === 'toggle_status') {
        state.status = !state.status;
        return state;
    }
    if(action.type === 'sort'){
        var {by, value} = action.sort;
        var {status}=state;

        return {
            status:status,
            sort:{
                by:by,
                value:value
            }
        }
    }
    return state;
}

export default myReducer;