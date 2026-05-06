import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice.js";
import searchReducer from "./slices/searchSlice.js";
import userReducer from "./slices/userSlice.js";
import cartReducer from "./slices/addtocartSlice.js";
import paymentReducer from "./slices/paymentSlice.js";
import orderReducer from "./slices/orderSlice.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        search: searchReducer,
        user: userReducer,
        cart: cartReducer,
        payment: paymentReducer,
        order:orderReducer,
    },
});