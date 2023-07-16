import { useEffect, useState, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
export function ProductsSelection({ count, incrementCount, decrementCount, brand}){
    const queryClient = useQueryClient()
    let query = useQuery(['products', { brand }], 
    () => fetch(`http://localhost:3000/brands/${brand}`).then((data) => data.json()));
    const addToCart = useMutation({
        mutationFn: (product) => {  const link = encodeURIComponent(product.image);
                                    fetch(`http://localhost:3000/cart/${product.brand}/${product.product}/${link}`,{method: "POST"})},
        onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
        },
    });
    const deleteFromCart = useMutation({
        mutationFn: (product) => fetch(`http://localhost:3000/cart/${product.product}`,{method: "DELETE"}),
        onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
        },
    });
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleProductClick = (productId) => {
        setSelectedProducts((prevSelectedProducts) => {
        if (prevSelectedProducts.includes(productId)) {
            decrementCount()
            return prevSelectedProducts.filter((id) => id !== productId);
        } else {
            incrementCount()
            return [...prevSelectedProducts, productId];
        }
        });
    };
    if (query.isLoading) return <div>Loading...</div>
    if (query.isError) return <div>An error has occurred: {JSON.stringify(query.error)}</div>;
    
    const products = query.data?.map((product) => (
        <div
            className={`m-4 p-2 w-[262px] h-[265px] relative mx-4 hover:cursor-pointer ${
            selectedProducts.includes(product.id) ? 'border-solid border-2 border-pepsiblue rounded-lg ' :'bg-white'
            } transition-colors duration-300 ease-in-out`}
            onClick={() => {handleProductClick(product.id);
                            selectedProducts.includes(product.id) ? deleteFromCart.mutate(product): addToCart.mutate(product)}}
            key={product.id}
        >
            <div>
                <div className="flex justify-center">
                    <img className="min-w-[150px] min-h-[160px] max-h-40" src = {product.image} width="120" height="160"/>
                </div>
                <div className="flex justify-center">
                    {product.product} 
                </div>
            </div>
            <input type="checkbox" checked={selectedProducts.includes(product.id)} className="top-2 right-2 absolute w-4 h-4" />
        </div>
    ));

    return(
        <>
            <div className="flex flex-row flex-wrap mt-4">
                {products}
            </div>
        </>
    )
}