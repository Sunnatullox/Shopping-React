import { useContext } from "react"
import { shopContext } from "../Context"
import GoodItem from "./GoodItem"

export default function GoodList(){
    const {goods=[]}=useContext(shopContext)
    if(!goods.length){
        return <h3>Nothing here</h3>
    }
    return(
        <div className="goods ">
            {goods.map(item => (
                <GoodItem key={item.id} {...item}/>
            ))}
        </div>
    )
}