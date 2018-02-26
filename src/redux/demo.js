import { createStore } from 'redux' ;
import {status, sort}  from  './action/index';
import myReducer from './reducers/index';

// var initialState     = {
//     status:false,
//     sort:{
//         by:'name',
//         value: 1
//     }
// }
// var myReducer = (state =initialState, action) => {
//     if(action.type === 'toggle_status') {
//         state.status = !state.status;
//         return state;
//     }
//     if(action.type === 'sort'){
//         var {by, value} = action.sort;
//         var {status}=state;
//
//         return {
//             status:status,
//             sort:{
//                 by:by,
//                 value:value
//             }
//         }
//     }
//     return state;
// }

const store = createStore(myReducer);
console.log('defeult:',store.getState());
// var action={type:'toggle_status'};

store.dispatch(status());
console.log('toggle_status:',store.getState());

// var sortAction = {
//     type:'sort',
//     sort:{
//         by:'name',
//         value:-1
//     }
// }
store.dispatch(sort({
    by:'name',
    value:-1
}));
console.log('sort:',store.getState());

