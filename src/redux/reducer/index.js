import * as actionTypes from '../action/action-types';


/**
 * reduce本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据） 
 * @param action 描述要做什么的对象,{type: 操作类型，payload：附加数据}
 */
export const reducer = (state, action) => {
    console.log('reducer started =====');
    // 返回一个新状态，替换掉之前的状态
    switch (action.type) {
        case actionTypes.INCREASE:
            return {
                ...state,
                count: state.count + 1,
            }
        case actionTypes.DECREASE:
            return {
                ...state,
                count: state.count - 1,
            }
        case actionTypes.SET:
            return {
                ...state,
                count: action.payload,
            }
        default:
            return state;
    }
}