/**
 * 手写bindCreateAction
 */

/**
 * @param {Object ｜ Function} actionCreators action创建函数合并的对象，或者单独的一个action创建函数
 * @param {Function} dispatch store的dispatch方法
 */
const bindCreateAction = (actionCreators, dispatch) => {

    if (typeof actionCreators === 'object') {
        const keys = Object.keys(actionCreators)
        const res = {};

        keys.forEach(key => {
            res[key] = (...args) => {
                const action = actionCreators[key](...args);

                dispatch(action);
            }
        })

        return res;
    }

    return (...args) => {
        dispatch(actionCreators(...args));
    }
}

export default bindCreateAction;