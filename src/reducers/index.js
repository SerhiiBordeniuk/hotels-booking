const initialState = {
    cart: [],
    totalPrice: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "HOTEL_INC":
            let check = false;
            state.cart.map((item, key) => {
                if (item.id == action.payload.id) {
                    state.cart[key].price += action.payload.price
                    state.cart[key].quantity++;
                    check = true;
                }
            });
            if (!check) {
                let formCart = {
                    image: action.payload.image,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    id: action.payload.id,
                };
                state.cart.push(formCart);
            }

            return {
                ...state
            };

        case "HOTEL_DEC":
            state.cart.map((item, key) => {
                if (item.id == action.payload.id && state.cart[key].quantity !== 0) {
                    state.cart[key].price -= action.payload.price
                    state.cart[key].quantity--;
                }
            });
            // let quantity = state.cart[action.payload].quantity;
            // if (quantity > 1) {
            //     state.cart.quantity--;
            //     state.cart[action.payload].quantity--;
            // }
            // return {
            //     ...state,
            // };
        default:
            return state;
    }
};

export default reducer;
