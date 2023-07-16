import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Link } from "react-router-dom";
export function ShoppingCart({ count })
{
    return(
        <>
            <div>
                <div className="flex justify-center w-full">
                    <Link to="/Cart" className="relative flex items-center justify-center mx-16 mt-8 p-8 rounded-xl bg-gray-100 w-[80px] h-[75px]  hover:backdrop-brightness-200 hover:shadow-lg hover:bg-pepsiblue hover:text-white hover:cursor-pointer transition-colors duration-300 ease-in-out">
                            <div>
                                <FontAwesomeIcon icon={faCartShopping} size="3x"/>
                            </div>
                            <div className="absolute top-0 right-0 bg-pepsiblue text-white border-2 border-solid rounded-xl px-2">{count}</div>
                    </Link>
                </div>
            </div>
        </>
    )
}