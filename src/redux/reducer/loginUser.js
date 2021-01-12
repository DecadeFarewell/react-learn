export const SetLoginUserType = Symbol('set-login-user');

export const createSetLoginUserAction = (user) => ({
    type: SetLoginUserType,
    payload: user,
})

const loginUserReducer = (state = null, action) => {
    switch (action.type) {
        case SetLoginUserType:
            return action.payload
        default:
            return state;
    }
}

export default loginUserReducer;


