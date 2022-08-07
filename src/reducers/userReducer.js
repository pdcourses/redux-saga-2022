import { dblClick } from "@testing-library/user-event/dist/click";
import ACTION_TYPES from "../actions/actionTypes";

let counter = 1000;

const db= [
    {id: counter++, login: 'vasya100', email: 'vasya@mail.com', isPay: false},
    {id: counter++, login: 'ann', email: 'ann@mail.com', isPay: false},
    {id: counter++, login: 'kasper1', email: 'kasper@mail.com', isPay: false}
];

const initialState ={
    users: db,
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.CREATE_USER: {
            console.log('I am in create user');
            const {users} = state;
            const {data} = action;
            const newUser = {
                ...data,
                id: counter++,
                isPay: false,
            };
            const newUsersDB = [...users, newUser];
            return {users: newUsersDB};
        }
        case ACTION_TYPES.DELETE_USER: {
            const {users} = state;
            const {id} = action;
            const newUsersDB = [...users];
            newUsersDB.splice(
                newUsersDB.findIndex( u => id == u.id), 1);
            return {users: newUsersDB};
        }
        case ACTION_TYPES.UPDATE_USER: {
            const {users} = state;
            const {data} = action;
            const newUsersDB = [...users];
            const findUserIndex = newUsersDB.findIndex( u => data.id == u.id);
            newUsersDB[findUserIndex] = {...newUsersDB[findUserIndex], ...data};
            return {users: newUsersDB};
        }
        case ACTION_TYPES.READ_USER: {
            const {users, currentUser} = state;
            const {id} = action;
            const newUsersDB = [...users];
            const findUserIndex = newUsersDB.findIndex( u => id == u.id);
            return {currentUser: newUsersDB[findUserIndex]};
        }
        default: return state;
    }

}

export default userReducer;