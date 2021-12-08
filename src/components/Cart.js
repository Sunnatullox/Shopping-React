import { useContext } from "react";
import { shopContext } from "../Context";

export default function Cart() {
  const { order, handleBasketShow }=useContext(shopContext)
  const quantite= order.length;
  return (
    <div
      className="d-flex bg-primary savatcha"
      style={{ borderRadius: "5px", textAlign: "center" }}
      onClick={handleBasketShow}
    >
      <span
        className="shop-bag"
        style={{ alignItens: "center", color: "white" }}
      >
        <i className="savat bi bi-cart3"></i>
      </span>
      <div
        className="flex-column ms-2"
        style={{ marginRight: "10px", color: "white" }}
      >
        <span className="qty">{quantite ? <span>{quantite}</span> : null}</span>
      </div>
    </div>
  );
}
