import product_1 from '../../asset/images/product-1.2.jpg';
const Initial_state = {
    carts: [{
        id: "01",
        title: "Chicken Burger",
        price: 24.0,
        image: product_1,
        category: "Burger",
        quantity: 0,
        price: 350,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est "
    }]
};


export const cartReducer = (state = Initial_state, action) => {
    switch (action.type) {
        case "ADD":

            const ItemIndex = state.carts.findIndex((Item) => Item.id === action.payload.id);

            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }



        case "Delete":
            const data = state.carts.filter((el) => el.id !== action.payload);
            // console.log(data);

            return {
                ...state,
                carts: data
            }

        case "Remove_One_Item":
            const ItemIndex_dec = state.carts.findIndex((Item) => Item.id === action.payload.id);

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

        default:
            return state
    }
}
export default cartReducer;