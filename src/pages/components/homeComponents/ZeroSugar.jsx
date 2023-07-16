import { ZeroSugarBlueBox } from "./ZeroSugarBlueBox"

export function ZeroSugar(){
    return(
        <>
            <div className="bg-black bg-no-repeat items-start bg-cover flex h-678 align-middle justify-center">
                <div className="relative">
                    <div>
                        <img className="h-678 max-w-full" src="https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/pzs-can-nobug-desktop.png" />
                    </div>
                    <div>
                        <img className="absolute top-24 right-52" src="https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/new-improved-taste.svg" />
                    </div>
                </div>
                <div className="mt-16 h-80">
                    <div className="h-80 flex justify-center align-middle">
                        <img src="https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/headline.svg" />
                    </div>
                    <div className="flex justify-center align-middle mt-12 h-8">
                        <img src="https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/try-it-to-believe-it.svg" />
                    </div>
                    <div className="flex justify-center align-middle mt-8">
                        <div className="relative">
                            <div className="justify-left">
                                <img width="233px" height="100px" src="https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/gagt_steve.png" />
                            </div>
                            <ZeroSugarBlueBox />
                        </div>
                        <div className="relative">
                            <div className="justify-right">
                                <img width="233px" height="100px" src="https://www.pepsi.com/en-us/uploads/images/pzs-new-taste/gagt_ben.png" />
                            </div>
                            <ZeroSugarBlueBox />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}