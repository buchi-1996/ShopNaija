import { useEffect, useMemo, useReducer } from 'react';
import reducerFunction from './reducerFunction';
import AppState from './AppState';

const AppContext = ({children}) => {
    // Initial Global State
    const initialState = {
        open: false,
        isLoading: true,
        modal: false,
        // shoppingCart: JSON.parse(localStorage.getItem('count'))   || 0 ,
        inCart: JSON.parse(localStorage.getItem('cartItems')) || [],
        inCartProducts: [],
        products: [],
        darkMode: false,
        modalPreview: null,
        total: 0
    }

    // Gives Access to the State and Also Sets the State Using dispatch
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    // when ever ShppingCart is modified setItem to local storage
    useEffect(() => {
        dispatch({type: 'GET_TOTALS'})
        localStorage.setItem('cartItems', JSON.stringify(state.inCart))
    }, [state.inCart]);


   
    // Fetch Products from fake Api and Store in Products Array
    const getProducts = async () => {
        const response =  await fetch('https://fakestoreapi.com/products/');
        const  products = await response.json();
        dispatch({type: 'GET_PRODUCTS', payload: products});
        dispatch({type: 'REMOVE_LOADER'})
        console.log(products)

    };

    // call only once after app loads
    useEffect(() => {
        getProducts()
    }, [])

    const getCartProducts = async () => {
        const response =  await fetch('https://fakestoreapi.com/products/');
        const  products = await response.json();
        dispatch({type: 'GET_CART_PRODUCTS', payload: products});
        console.log(products)

    };

    // call only once after app loads
    useEffect(() => {
        getCartProducts()
    }, [])

    const toggleDrawer = () => {
        dispatch({type:'toggle'})
    }
    
    const addToCart = (id) => {
        dispatch({ type: 'ADD_TO_CART', payload: id });
    }
    
    // console.log(state.inCart)

    const contextValue = useMemo(() => ({...state, dispatch, toggleDrawer, addToCart}), [state, dispatch])
    return (
        <AppState.Provider value={contextValue}>
            {children}
        </AppState.Provider>
    )
}

export default AppContext;
