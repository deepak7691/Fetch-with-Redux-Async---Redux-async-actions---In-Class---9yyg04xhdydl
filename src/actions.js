// import {
//     GET_USERS_BY_ID_REQUEST,
//     GET_USERS_BY_ID_SUCCESS,
//     GET_USERS_BY_ID_FAIL,
// } from "./constants";

// import {
//     getUsers,
// } from "./api";

// import store from './store'



// const getUserById = async () => {
//    //Complete this function
// };

// export default getUserById



import {
    GET_USERS_BY_ID_REQUEST,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_FAIL,
} from "./constants";

import {
    getUsers,
} from "./api";

import store from './store'



const getUserById = async (id) => {
    //Complete this function
    try {
        store.dispatch({ type: GET_USERS_BY_ID_REQUEST });
        const userName = await getUsers(id);
        store.dispatch({
            type: GET_USERS_BY_ID_SUCCESS,
            payload: userName,
        });
    } catch (error) {
        store.dispatch({
            type: GET_USERS_BY_ID_FAIL,
            payload: error.message,
        });
    }
};

export default getUserById




