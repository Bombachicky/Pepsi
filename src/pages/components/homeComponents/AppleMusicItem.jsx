
export function AppleMusicItem(){
    return(
        <>
            <div >
                <img className="h-678 max-w-full" src="https://www.pepsi.com/en-us/uploads/images/apple-music/pzs-can-old@2x.png" /> {/*Pepsi Image */}
            </div>
            <div className="mt-20">
                <div>
                    <div className="flex justify-center">
                        <img src="https://www.pepsi.com/en-us/uploads/images/apple-music/apple-music-lockup-i-pad-horizontal-mobile.svg" /> {/* Apple music image */}
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-fit text-white text-center border-2 rounded-3xl py-0.5 px-5 mt-12 hover:animate-fade hover:text-pepsiblue hover:bg-white cursor-pointer">Get it Now!</div> {/* Get it now button */}
                    </div>
                    <div className="text-xs flex justify-center text-center mt-4">
                        {/* Terms and conditions */}
                        <div className="w-96 text-white">Ends 09/17/23. Age restrictions apply, US/DC/Guam/PR. Limit 1 per person. New & qualified returning subscribers only. $10.99/month after trial until cancelled. Rules & Terms at <a className="hover:underline" href="https://pressplayonsummer.com/" target="_blank">pressplayonsummer.com.</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}