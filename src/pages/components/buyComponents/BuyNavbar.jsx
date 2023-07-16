import { NavbarItem } from '../homeComponents/NavbarItem'
import { BrowserRouter, Route, Link } from "react-router-dom";

export function BuyNavbar(){
    return(
        <>
            <nav className="bg-pepsiblue flex items-center flex-row content-center justify-between uppercase text-white font-poppins p-3 text-sm"> {/* navbar */}
                <div className="flex items-center flex-wrap flex-row p-1 mx-32"> {/* navbar left*/}
                    <Link to="/"> {/* navbar pepsi logo*/}
                        <img src="https://www.pepsi.com/en-us/assets/images/logo.44fea4ca40e8a8843bb0fdf07d618439.png"></img>
                    </Link>
                </div>
                <div className="flex items-center flex-wrap flex-row p-1 mx-32">
                    {/* navbar items*/}
                    <NavbarItem name="Sign Up" />
                    <img className="w-3 h-3 ml-3 cursor-pointer" src="https://www.pepsi.com/en-us/assets/images/navigation-arrow.507f9064ac2514d24d99d36b5d4f5dde.svg" />
                    <NavbarItem name="Product Locator" />
                    <NavbarItem name="PepsiCo Product Facts" />
                    <NavbarItem name="Pepsi.com" />
                </div>
            </nav>
        </>
    )
}