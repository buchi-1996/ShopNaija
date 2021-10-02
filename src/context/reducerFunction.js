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
                inCart: !state.inCart.find(item => item.id === action.payload) ? [state.products[0].find(x => x.id === action.payload), ...state.inCart ] : (() => {
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
