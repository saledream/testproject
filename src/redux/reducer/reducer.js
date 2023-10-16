import { combineReducers } from "redux";


import todoReducer from "./todoReducer/todoReducer";
import filterReducer from "./filterReducer/filterReducer";

// export default function rootReducer(state={},action) {

//     return {
//         todos:todoReducer(state.tods,action),
//         filter:filterReducer(state.filters,action)
//     }
// } 
const rootReducer = combineReducers({
    todos:todoReducer,
    filters:filterReducer
})

export default rootReducer;