import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slice/CartSlice'
import wishListReducer from "./slice/WishListSlice";

const Store = configureStore({
    reducer:{
        cart : cartReducer,
        wishlist : wishListReducer,
    }
});
export default Store;