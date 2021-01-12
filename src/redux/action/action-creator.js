import * as actionTypes from './action-types';


export const getIncreaseAction = () => {
    return {
        type: actionTypes.INCREASE,
    };
}

export const getDecreaseAction = () => {
    return {
        type: actionTypes.DECREASE,
    };
}

export const getSetAction = (value) => {
    return {
        type: actionTypes.SET,
        payload: value,
    }
}