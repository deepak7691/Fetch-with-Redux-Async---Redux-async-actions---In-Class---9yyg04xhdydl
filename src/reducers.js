// import {
//     GET_USERS_BY_ID_REQUEST,
//     GET_USERS_BY_ID_SUCCESS,
//     GET_USERS_BY_ID_FAIL,
// } from "./constants";

// const initialState = {
//     isLoading: null,
//     isCompleted: null,
//     error: null,
//     data: null
// }
  
// export default function appReducer(state = initialState, action) {
    
//     switch (action.type) {
//         case GET_USERS_BY_ID_REQUEST: {
//             return {
//                 ...state,
//                 isLoading: true,
//                 isCompleted: false,
//                 error: null,
//                 data:null
//             }
//         }
//         //Complete the rest of the cases
//     }
// }


import {
    GET_USERS_BY_ID_REQUEST,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_FAIL,
} from "./constants";

const initialState = {
    isLoading: null,
    isCompleted: null,
    error: null,
    data: null
}
  
export default function appReducer(state = initialState, action) {
    
    switch (action.type) {
      case GET_USERS_BY_ID_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isCompleted: false,
          error: null,
          data: null,
        };
      }

      case GET_USERS_BY_ID_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isCompleted: true,
          error: false,
          data: action.payload,
        };
      }

      case GET_USERS_BY_ID_FAIL: {
        return {
          ...state,
          isLoading: false,
          isCompleted: true,
          error: action.payload,
          data: null,
        };
      }
      default:
        return state;
      
    }
}