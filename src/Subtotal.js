import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    console.log("hehe", basket);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal({basket?.length}): 
                            
                            <strong>{basket.price.reduce((total, num)=>{
                                return total + num
                            })
                            }</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )} 
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} 
            />       
            <button>Proceed to Checkout</button>  
        </div>
    )
}

export default Subtotal
