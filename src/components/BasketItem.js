import { useContext } from "react";
import { shopContext } from "../Context";

export default function BasketItem({
  id,
  full_background,
  name,
  price,
  quantite,
}) {
  const {incrementQuantite,decrementQuantite,removeFromBasket,}=useContext(shopContext);

  return (
    <>
      <div
        className="modalka-body modal-body d-flex"
        style={{
          alignItems: "center",
          border: "0.5px solid rgba(71, 71, 71, 0.6)",
          margin: "5px",
        }}
      >
        <img src={full_background} className="card-img-top" alt="..." />
        <span className="basketitemtext">{name}</span>
        <i class="bi bi-plus" onClick={() => incrementQuantite(id)}></i>
        <span className="basketitemtext">{quantite}</span>
        <i class="bi bi-dash" onClick={()=> decrementQuantite(id)}></i> <b>=</b>
        <span className="basketitemtext">{price * quantite}</span>
        <b> $</b>
       
       
        <a
          href="#!"
          className="btn-trash btn btn-danger"
          alt="..."
          onClick={() => removeFromBasket(id)}
        >
          <i className="bi bi-trash" ></i>
        </a>
        <a
          href="#!"
          className="btn-cart-check btn btn-primary"
          alt="..."
        >
          <i className=" bi bi-cart-check" ></i>
        </a>
      </div>
    </>
  );
}
