import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishListItems: [],

};

const wishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        // toggleWishList(state, action) {
        //     state.isOpenWishList = action.payload;
        // },
        additem(state, action){
            const newItemId = action.payload.id;
            const existingItem = state.wishListItems.find(item => item.id === newItemId);

            if(existingItem){
                state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload.id)
            }else{
                state.wishListItems.push(action.payload);
            }
        },
        removeItem(state, action){
            state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload);
          },  
    }
})

export const {additem, removeItem} = wishListSlice.actions; 
export default wishListSlice.reducer;