import {createContext, useReducer} from "react"
import { reducer } from "./Reducer";

export const shopContext= createContext();



const initialState ={
    goods:[],
    loading:true,
    order:[],
    isBasketShow:false
}

export const ContextProvider = ({children})=> {
    const[value, dispatch]=useReducer(reducer, initialState)

    value.addToBasket= (item)=>  {
        dispatch({type:"ADD_TO_BASKET", paylod:item})
    }

    value.incrementQuantite=(itemIdi) => {
        dispatch({type: "INCRIMENT_QUANTITE",paylod:{id:itemIdi}})
    } 

    value.decrementQuantite = (itemIdi) => {
        dispatch({type: "DECREMENT_QUNTITE", paylod:{id: itemIdi}})
    }

    value.handleBasketShow= () =>{
        dispatch({type:"TOGLE_BASKET"})
    } 

    value.removeFromBasket= (itemIdi) => {
        dispatch({type:"REMOVE_FROM_BASKET", paylod:{id:itemIdi}})
    }

    value.setGoods= (data)=> {
        dispatch({type:"SET_GOODS", paylod: data})
    }
  return(
        <shopContext.Provider value={value} >
            {children}
        </shopContext.Provider>
    )
}