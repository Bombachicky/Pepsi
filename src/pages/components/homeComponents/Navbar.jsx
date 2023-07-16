import { NavbarItem } from "./NavbarItem"
import { BrowserRouter, Route, Link } from "react-router-dom";
export function Navbar(){
    return(
        <>
            <nav className="bg-pepsiblue flex items-center flex-wrap flex-row content-center justify-between uppercase text-white font-poppins p-3 text-sm"> {/* navbar */}
                <div className="flex items-center flex-wrap flex-row p-1"> {/* navbar left*/}
                    <div> {/* navbar pepsi logo*/}
                        <img src="https://www.pepsi.com/en-us/assets/images/logo.44fea4ca40e8a8843bb0fdf07d618439.png"></img>
                    </div>
                    {/* navbar items*/}
                    <NavbarItem name="View Products " />
                    <img className="w-3 h-3 ml-3 cursor-pointer" src="https://www.pepsi.com/en-us/assets/images/navigation-arrow.507f9064ac2514d24d99d36b5d4f5dde.svg" />
                    <NavbarItem name="What's New" />
                    <NavbarItem name="Newsletter" />
                    <NavbarItem name="Contact Us" />
                </div>
                <div className="border-2 rounded-3xl py-0.5 px-5 mr-3 hover:animate-fade hover:text-pepsiblue hover:bg-white cursor-pointer"> {/* navbar right*/}
                    <Link to="Buy">Buy Pepsi Products</Link>
                </div>
            </nav>
        </>
    )
}