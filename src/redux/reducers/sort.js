var initialState     = {

        by:'name',
        value: 1

}
var myReducer = (state =initialState, action) => {

    if(action.type === 'sort'){
        var {by, value} = action.sort;
        var status=state;

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