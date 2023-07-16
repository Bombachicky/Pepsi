export function Footer(){
    return(
        <>
            <div className="flex justify-between bg-pepsiblue h-64 px-8">
                <div className="flex items-center">
                    <img src="https://www.pepsi.com/en-us/uploads/images/logo-large.png?mtime=20180110134814" />
                </div>
                <div className="flex items-center justify-between text-white font-poppins">
                    <div className="p-8">
                        <div className="hover:underline cursor-pointer">CONTACT US</div>
                        <div className="hover:underline cursor-pointer">TERMS AND CONDITIONS</div>
                        <div className="hover:underline cursor-pointer">PRIVACY POLICY</div>
                    </div>
                    <div className="p-8">
                        <div className="hover:underline cursor-pointer">COPYRIGHT</div>
                        <div className="hover:underline cursor-pointer">PRODUCT FACTS</div>
                        <div className="hover:underline cursor-pointer">STORE LOCATOR</div>
                    </div>
                    <div className="p-8">
                        <div className="hover:underline cursor-pointer">SERVE PEPSI</div>
                        <div className="hover:underline cursor-pointer">ABOUT OUR ADS</div>
                        <div className="hover:underline cursor-pointer">CAREER</div>
                    </div>
                </div>
                <div className="flex-column flex items-center">
                    <div>
                        <div className="text-white font-poppins border-2 rounded-3xl py-0.5 px-5 hover:animate-fade hover:text-pepsiblue hover:bg-white cursor-pointer">SUBSCRIBE TO OUR NEWSLETTER</div>
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <img className="hover:brightness-50 hover:cursor-pointer" width="32" height="32" src="https://www.pepsi.com/en-us/uploads/images/icon-twitter.svg?mtime=20180110134808" />
                            </div>
                            <div>
                                <img className="hover:brightness-50 hover:cursor-pointer" width="32" height="32" src="https://www.pepsi.com/en-us/uploads/images/icon-instagram.svg?mtime=20180110134805" />
                            </div>
                            <div>
                                <img className="hover:brightness-50 hover:cursor-pointer" width="32" height="32" src="https://www.pepsi.com/en-us/uploads/images/icon-youtube.svg?mtime=20180110134811" /> 
                            </div>
                            <div>
                                <img className="hover:brightness-50 hover:cursor-pointer" width="32" height="32" src="https://www.pepsi.com/en-us/uploads/images/icon-facebook.svg?mtime=20180110134803" />  
                            </div>
                            <div>
                                <img className="hover:brightness-50 hover:cursor-pointer" width="32" height="32" src="https://www.pepsi.com/en-us/uploads/images/icon-tiktok.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}