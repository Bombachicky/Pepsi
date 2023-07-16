export function SocialMediaItem({image, socialMediaHandle}){
    return(
        <>
            <div className="relative animate-stayOnPulse">
                <div className="hover:brightness-50 hover:scale-110 hover:rotate-6 hover:animate-socialMediaImage">
                    <img width="250" height="250" src={image}/>
                </div>
                <div className="absolute bottom-4 left-4">
                    <img width="32" height="32" src={socialMediaHandle} />
                </div>
            </div>
        </>
    )
}