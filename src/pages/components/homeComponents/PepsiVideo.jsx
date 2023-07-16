export function PepsiVideo(){
    return(
        <>
            <div className="w-full h-678 flex justify-center">
            <video className="object-cover" width="2000px" height="800px" autoplay="true" loop="true" muted="true">
                <source src="https://www.pepsi.com/en-us/uploads/media/PepsiWildCherry.Copier.15.mp4" type="video/mp4" />
            </video>
        </div>
        </>
    )
}