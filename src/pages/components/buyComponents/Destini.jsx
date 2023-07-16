import { useState, useContext } from 'react'
import { ShoppingCart } from '../destiniComponents/ShoppingCart';
import { ProductsColumn } from '../destiniComponents/ProductsColumn';
import { ProductsSelection } from '../destiniComponents/ProductsSelection';
import { CountContext } from '../../../CountContext';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
export function Destini()
{
    const { count, setCount } = useContext(CountContext);
    const [brand, setBrand] = useState("Pepsi")
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const brandSet = (brand) => {
        setBrand(brand)
    }

    return(
        <>
        <div>
            <ShoppingCart count={count} />
            <div className="flex justify-center text-pepsiblue">Product Selection</div>
            <hr className="h-0.5 bg-gradient-to-r from-pepsiblue to-blue-500 my-4 mx-auto w-9/12" />
            <div className="flex">
                <ProductsColumn brand={brand} brandSet={brandSet}/>
                <ProductsSelection count={count} incrementCount={incrementCount} decrementCount={decrementCount} brand={brand}/>
            </div>
        </div>
        
        </>
    )

    // <button onClick={() => setCount(count + 1)}>+</button>
}
