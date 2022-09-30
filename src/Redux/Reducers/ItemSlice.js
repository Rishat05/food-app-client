import { createSlice } from '@reduxjs/toolkit';
const initialCartState = {
    carts: []
};

export const ItemSlice = createSlice({

    name: "foodItem",
    initialState: initialCartState,
    reducers: {
        AddItem: (state, action) => {
            const ItemIndex = state.carts.findIndex((Item) => Item.pid === action.payload.pid);

            if (ItemIndex >= 0) {

                state.carts[ItemIndex].quantity += 1
                void {
                    ...state,
                    carts: [...state.carts]
                }

            } else {
                const temp = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        },

        deleteItem: (state, action) => {

            const data = state.carts.filter((el) => el.pid !== action.payload);

            return {
                ...state,
                carts: data
            }
        },
        Remove_One_Item: (state, action) => {
            const ItemIndex_dec = state.carts.findIndex((Item) => Item.pid === action.payload.pid);

            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const dltItems = state.carts[ItemIndex_dec].qnty -= 1
                console.log([...state.carts, dltItems]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[ItemIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }

        }

    }

});
export const { AddItem, deleteItem, Remove_One_Item } =
    ItemSlice.actions;
export default ItemSlice.reducer;