import { useEffect, useState, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductsSelection } from './ProductsSelection'
export function ProductsColumn({brand, brandSet}){
    const queryClient = useQueryClient()
    let query = useQuery({ queryKey: ['cans'], queryFn: () => fetch(`http://localhost:3000/cans/`).then(data =>data.json()) })
    
    const str = "border-2 rounded-xl px-8 transition-all duration-[250ms] hover:backdrop-brightness-200 hover:shadow-lg hover:bg-pepsiblue hover:text-white hover:cursor-pointer"
    const brands = new Map();
    query.data?.map((can) =>{
        if(brands.has(can.brand)){
            brands.set(can.brand, brands.get(can.brand) + 1)
            
        }
        else{
            brands.set(can.brand, 1)
        }
    })

    if (query.isLoading) return <div>Loading...</div>
    if (query.isError) return <div>An error has occurred: {JSON.stringify(query.error)}</div>;


    const list = [...brands.entries()].map(([key, value]) => (
        
        <div key={key} className="p-1 flex flex-col">
            <div className="flex">
                <button className={key === brand ? str + "shadow-lg bg-pepsiblue text-white" : str}
                onClick={() => brandSet(key)}
                >{key} ({value})</button>
            </div>
        </div>
    ))


    return(
        <>
            <div className="w-[500px] flex justify-center">
                <div>
                    <div className="text-blue-600 mb-4">Browse Products</div>
                    <div className="h-6/12 relative">
                        <div>{list}</div>
                    </div>
                </div>
            </div>
        </>
    )
}