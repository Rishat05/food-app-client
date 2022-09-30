// import { configureStore } from "@reduxjs/toolkit";
// import rootred from "./Redux/Reducers/main";

// const store = configureStore({
//     reducer: {
//         rootred: rootred,
//     },
// }
// );


// export default store;
//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from './Redux/Reducers/ItemSlice';

const store = configureStore({
    reducer: {
        ItemReducer: ItemReducer
    },
});

export default store;