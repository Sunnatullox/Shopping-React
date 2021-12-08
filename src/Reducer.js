import { toast } from "react-toastify";
export function reducer ( state,  {type, paylod }){
    switch (type){
        case"ADD_TO_BASKET":{
            const ItemIndex = state.order.findIndex((orderItem) => orderItem.id === paylod.id);
            let newOrder=null
            if (ItemIndex < 0) {
              const newItem = {
                ...paylod,
                quantite: 1,
              };
        
              newOrder=[...state.order, newItem];
            } else {
              newOrder = state.order.map((orderItem, index) => {
                if (index === ItemIndex) {
                  return {
                    ...orderItem,
                    quantite: orderItem.quantite + 1,
                  };
                } else {
                  return orderItem;
                }
              });
            }
            toast.success("Goods added to basket successfully!")
            return{
                ...state,
                order:newOrder
            }
        };
        
        case "INCRIMENT_QUANTITE":{
            
        return{
            ...state,
            order: state.order.map((el) => {
                if (el.id === paylod.id) {
                  const newQuantite = el.quantite + 1;
                  return {
                    ...el,
                    quantite: newQuantite,
                  };
                } else {
                  return el;
                }
              })
              
        }
        }
        
        case "DECREMENT_QUNTITE":{
            return{
                ...state,
                order: state.order.map((el) => {
                    if (el.id === paylod.id) {
                      const newQuantite = el.quantite - 1;
                      return {
                        ...el,
                        quantite: newQuantite >= 0 ? newQuantite : 0
                      };
                    } else {
                      return el;
                    }
                  })
            }
            }
       
        case "TOGLE_BASKET": {
            return{
                ...state,
                isBasketShow: !state.isBasketShow
            }
        }
   
        case "REMOVE_FROM_BASKET":{
        return{
            ...state,
            order:state.order.filter((item) => item.id !== paylod.id)
        }
        }
        case "SET_GOODS":{
        return{
          ...state,
           goods: paylod || [],
           loading: false,
        }
        }
        default:
        return state
    }
}