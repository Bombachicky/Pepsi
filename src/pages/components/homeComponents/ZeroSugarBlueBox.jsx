export function ZeroSugarBlueBox(){
    return(
        <>
            <div className="absolute top-10 left-16">
                <div className="relative">
                    <div>
                        <svg className="fill-current text-transparent" width="400" height="110">
                            <rect width="100" height="50" className="fill-blue-500" />
                        </svg>
                    </div>
                    <div className="absolute bottom-8">
                        <div className="relative">
                            <div className="absolute bottom-1 left-1 right-1">
                                <svg height="100" width="100">
                                    <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="3" fill="none" />
                                </svg>
                            </div>
                            <div className="absolute left-7 bottom-7">
                                <svg viewBox="0 0 200 200" height="50" width="50">
                                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="text-white font-poppins">Watch Now!</div>
            </div>
        </>
    )
}