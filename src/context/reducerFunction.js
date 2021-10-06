import { toast } from 'react-toastify';

const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: !state.modal,
                modalPreview: action.payload
            }
        case 'toggle':
            return {
                ...state,
                open: !state.open,
            };
        case 'ADD_TO_CART':
            return {
                ...state,
                inCart: !state.inCart.find(item => item.id === action.payload) ? [state.inCartProducts[0].find(x => {
                    let cartObj = null
                    if(x.id === action.payload){
                        cartObj = x;
                        cartObj.qty = 1
                    }
                    return cartObj;
                }), ...state.inCart ] : (() => {
                    toast('Items Aready In Cart', {
                        toastId: action.payload
                        })
                    return [...state.inCart] 
                })()
            };
        case 'TOGGLE_DARKMODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case 'GET_PRODUCTS' : 
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        case 'GET_CART_PRODUCTS' : 
            return {
                ...state,
                inCartProducts: [...state.inCartProducts, action.payload],
            };

        case 'INCREASE_COUNT' : 
        return {
            ...state,
            inCart: state.inCart.reduce((acc, item) => {
                if(item.id === action.payload){
                    item.qty = item.qty + 1;
                }

                return [...acc, item]
            
            }, [])
        }
        case 'DECREASE_COUNT' : 
        return {
            ...state,
            inCart: state.inCart.reduce((acc, item) => {
                if(item.id === action.payload){
                    item.qty = item.qty - 1;
                }

                return [...acc, item]
            
            }, []).filter(item => item.qty !== 0)
        }
            
        case 'REMOVE_LOADER' : {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}




export default reducerFunction;
