import { createStore, bindActionCreators } from 'redux';
import { reducer } from './reducer/index';
import * as actionCreator from './action/action-creator';

// 仓库数据
const initState = {
    loginUser: null,
    allUsers: null,
}

const store = createStore(reducer, initState);

/**
 * 第一个参数： action创建函数合并的对象
 * 第二个参数：仓库的dispatch函数
 */
const bindActions =  bindActionCreators(actionCreator, store.dispatch);

console.log(store.getState());

// 使用bindActionCreator之前
// store.dispatch(actionCreator.getIncreaseAction()); 
// store.dispatch(actionCreator.getSetAction(5));

// 使用bindActionCreator之后
bindActions.getIncreaseAction();
bindActions.getSetAction(5);

console.log(store.getState());
