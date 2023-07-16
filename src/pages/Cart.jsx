import { useState, useContext } from 'react'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { CountContext } from '../CountContext';
export function Cart(){
    const { count, setCount } = useContext(CountContext);
    const queryClient = useQueryClient()
    let query = useQuery({ queryKey: ['cart'], queryFn: () => fetch(`http://localhost:3000/cart/`).then(data =>data.json()) })
    const deleteAllFromCart = useMutation({
        mutationFn: () => fetch(`http://localhost:3000/cart/`,{method: "DELETE"}),
        onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
        },
    });
    if (query.isLoading) return <div>Loading...</div>
    if (query.isError) return <div>An error has occurred: {JSON.stringify(query.error)}</div>;
    function emptyCart(){
        deleteAllFromCart.mutate();
        setCount(0);
        alert("Purchased!");
    }
    const cart = query.data?.map((product) => (
        <div className="flex justify-center">
            <div className="flex flex-col items-center">
                <div>
                <img width="150" height="150" src={product.image} />
                </div>
                <div className="flex items-center mx-4">{product.product}</div>
                <hr className="h-0.5 bg-pepsiblue w-[500px]"/>
            </div>
        </div>
    ));
    return(
        <>
        <div>
            <div className="text-pepsiblue flex justify-center text-lg">Your Cart</div>
            <div className="flex justify-center">
                <Link to="/Destini" className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Back</Link>
            </div>
            <div className="flex justify-center mt-2">
                <button onClick={()=>emptyCart()}class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Purchase</button>
            </div>
        </div>
            
            
            <hr className="h-0.5 bg-gradient-to-r from-pepsiblue to-blue-500 my-4 mx-auto w-9/12" />
            <div>{cart}</div>
        </>
    )
}