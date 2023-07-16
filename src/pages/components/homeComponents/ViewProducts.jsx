export function ViewProducts(){
    return(
        <>
            <div className="bg-pepsiproducts bg-no-repeat bg-cover align-middle h-678 w-screen relative flex justify-between items-center px-96">
                <div className="h-96 animate-pepsiright">
                    <div className="font-poppins text-white text-6xl">
                        <div>
                            ALL YOUR
                        </div>
                        <div>
                            FAVORITE
                        </div>
                        <div>
                            FLAVORS.
                        </div>
                        <div>
                            ALL RIGHT HERE.
                        </div>
                    </div>
                    <div className="text-white font-poppins w-96 mt-8">
                    Pepsi. Diet Pepsi. Pepsi Zero Sugar. The gang’s all here. Compare
                    flavors, get nutritional facts and check out ingredients for all
                    our Pepsi products.
                    </div>
                    <div className="flex justify-left mt-4">
                        <div className="text-white font-poppins border-2 rounded-3xl py-0.5 px-5 hover:animate-fade hover:text-pepsiblue hover:bg-white cursor-pointer">View Products</div>
                    </div>
                </div>
                <div className="animate-pepsileft">
                    <img src="https://www.pepsi.com/en-us/uploads/images/promotion1-hero_v3.png" width="439" height="223"/>
                </div>
            </div>
        </>
    )
}