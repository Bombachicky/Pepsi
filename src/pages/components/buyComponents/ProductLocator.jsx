export function ProductLocator(){
    return(
        <>
        <div className="relative">
            <div className="bg-productlocator w-full h-[190px] filter bg-cover relative brightness-50"></div>
            <div className="flex items-center absolute inset-y-2/4 text-white text-5xl left-48 mt-5 font-thin">Product Locator</div>
            <div className="flex items-center absolute inset-y-2/4 right-48 text-black bg-white/75 text-xl border-2 rounded-3xl h-11 py-0.5 px-5 transition-all duration-[250ms] hover:backdrop-brightness-200 hover:shadow-lg hover:cursor-pointer">
                Sign up for news and offers</div> 
            </div>
        </>
    )
}