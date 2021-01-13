/**
 * 手写 combineReducers
 */

import { reducer } from '../reducer';
import { isPlainObject } from './createStore';

const validateReducers = (reducers) => {
    if (typeof reducers !== Object) { // 对象
        throw new TypeError('reducers must be an object')
    }

    if (!isPlainObject(reducers)) { // 平面对象
        throw new TypeError('reducer must be a plain object');
    }
    // 验证reducers的返回值是不是undefinde，即在reducer函数中，如果没有符合的type，应该返回默认的state
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            /**
             *  这两段验证的意思是：
             * 通过传递默认state值为undefined，和一个特殊的type值，来验证你传入的reducer是否
             * 会返回一个undefined，如果是则会发生报错；
             * 
             * 原理： 如果state为undefined，则会使用传入的reducer中设定的默认值，而特殊的type在swtich中肯定是没有
             * 相匹配的case，所以应该要走默认值，如果返回的值为undefined，则证明传入的reducer存在问题
             */
            let state = reducer(undefined, {
                type: 'xxxx-1',
            })
            if (state === undefined) {
                throw new TypeError('reducer must not return undefined');
            }

            state = reducer(undefined, {
                type: 'xxx-2',
            })
            if (state === undefined) {
                throw new TypeError('reducer must not return undefined');

            }
        }
    }
}

const combineReducers = (reducers) => {

    // 验证reducers
    validateReducers(reducers);

    return (state = {}, action) => {
        const newState = {}; // 要返回的新状态

        for(const reducerKey in reducers){
            if(reducers.hasOwnProperty(reducerKey)){
                const reducer = reducers[reducerKey];

                newState[reducerKey] = reducer(state[reducerKey], action);
            }
        }
        return newState;
    }
}

export default combineReducers;