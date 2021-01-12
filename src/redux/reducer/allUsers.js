export const AddUserType = Symbol('add-user');
export const DelUserType = Symbol('delete-user');

export const createAddUserAction = (user) => ({
    type: AddUserType,
    payload: user,
});

export const createDelUserAction = (id) => ({
    type: DelUserType,
    payload: id,
})

const initState = [
    {
        id: 1,
        name: 'kwok',
        age: 23,
    }
]

const addUserReducer = (state = initState, action) => {
    switch (action.type) {
        case AddUserType:
            return [...state, action.payload];
        case DelUserType:
            return state.filter(user => user.id !== action.payload.id)
        default:
            return state;
    }
}

export default addUserReducer;
