import { useContext } from "react";
import { shopContext } from "../Context";
import BasketItem from "./BasketItem";


export default function BasketMadalca() {
  const { order=[], handleBasketShow}= useContext(shopContext)


  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantite;
  }, 0);

  return (
    <div className="modalka">
      <div className="modal-group basked-modal">
        <div className="modal-content" style={{ border: "none" }}>
          <div className="modal-header">
            <h5 className="modal-title">Total Cost:{totalPrice} </h5>
            <div className="sends">
          <button type="button" className=" btn btn-primary">
            Pay it all{" "}
          </button>
        </div>
            <h4
              className="butoon-x"
              onClick={handleBasketShow}
            >x</h4>
          </div>
          {order.length ? order.map(item => {
              return (
                <BasketItem key={item.id} {...item}/>
              );
            })
           : (
            <span className="Basket-Error">Backet is empty</span>
          )}
        </div>
      </div>
    </div>
  );
}
