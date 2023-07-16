import { BuyNavbar } from "./components/buyComponents/BuyNavbar";
import { ProductLocator } from "./components/buyComponents/ProductLocator";
import { Products } from "./components/buyComponents/Products";
export default function Buy(){
    return(
        <>
            <BuyNavbar />
            <ProductLocator />
            <Products />
        </>
    )
}