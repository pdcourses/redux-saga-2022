import ACTION_TYPES from "./actionTypes";

// db
export const createUser = (data) => {
    return{
        type: ACTION_TYPES.CREATE_USER,
        data: data,
    }
};

export const updateUser = (newData) => {
    return{
        type: ACTION_TYPES.UPDATE_USER,
        data: newData
    }
}

export const deleteUser = (id) => {
    return{
        type: ACTION_TYPES.DELETE_USER,
        id: id,
    }
}

export const getUser = (id) => {
    return{
        type: ACTION_TYPES.READ_USER,
        id: id,
    }
}

//saga
export const getUserAction = () => ({
    type: ACTION_TYPES.GET_USER_ACTION
})

export const getUserRequest = () => ({
    type: ACTION_TYPES.GET_USER_REQUEST
})

export const getUserSuccess = (user) => ({
    type: ACTION_TYPES.GET_USER_SUCCESS,
    user
})

export const getUserError = (error) => ({
    type: ACTION_TYPES.GET_USER_ERROR,
    error
})
