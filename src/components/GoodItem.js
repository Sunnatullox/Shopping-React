 import { useContext } from "react";
 import { shopContext } from "../Context";
 
 
 export default function GoodItem({id, name, description, price, full_background}) {
  const {addToBasket} = useContext(shopContext) 

  return (
    <div className="card container-fluid" style={{ width: "18rem" }} id={id}>
      <img src={full_background} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className=" row  container">
        <a
          href="#!"
          className="col w-25 btn btn-primary"
          onClick={() => addToBasket({id,full_background, name, price})}
        >
          To buy
        </a>
        <span className="col text-md-end align-self-center l-2">
          {price}$
        </span>
      </div>
      <br />
    </div>
  );
}
