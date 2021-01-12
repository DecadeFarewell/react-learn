import { createStore, bindActionCreators, combineReducers } from 'redux';
import loginUserReducer, { createSetLoginUserAction } from './loginUser';
import allUserReducer, { createAddUserAction, createDelUserAction } from './allUsers';

// const reducer = (state = {}, action) => {
//     const combineState = {
//         loginUser: loginUserReducer(state.loginUser, action),
//         allUsers: allUserReducer(state.allUsers, action),
//     }

//     return combineState;
// }

/**
 * 这是官方提供的合并reducer函数，和上面我们手写的是一样的效果
 */
const reducer = combineReducers({
    loginUserReducer,
    allUserReducer
});

const store = createStore(reducer);

store.subscribe(() => {
    console.log('监听器，状态发生变化了。')
})

const bindActions = bindActionCreators({
    createSetLoginUserAction,
    createAddUserAction,
    createDelUserAction,
}, store.dispatch);

console.log(store.getState());

bindActions.createAddUserAction({
    id: 2,
    name: 'lyy',
    age: '20',
});
// store.dispatch(createAddUserAction({
//     id: 2,
//     name: 'lyy',
//     age: 20,
// }))


console.log(store.getState());
