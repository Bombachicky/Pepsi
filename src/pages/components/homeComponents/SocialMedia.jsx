import { SocialMediaItem } from "./SocialMediaItem";

export function SocialMedia(){
    return(
        <>
            <div>
                <div className="text-pepsiblue text-6xl text-center font-poppins animate-stayOnPulse duration-0">STAY ON THE PULSE. FOLLOW PEPSI.</div>
                <div className="flex justify-center px-8">
                    <SocialMediaItem image="https://www.pepsi.com/en-us/uploads/images/social-twitter.png?mtime=20180110134932" socialMediaHandle="https://www.pepsi.com/en-us/assets/images/icon-twitter.19d7e9de57475b8de6a58e97e7f52dfb.svg" />
                    <SocialMediaItem image="https://www.pepsi.com/en-us/uploads/images/social-facebook.png?mtime=20180110134926" socialMediaHandle="https://www.pepsi.com/en-us/assets/images/icon-facebook.cf7efb08f7b9eaa4f8c2765e29c33bdc.svg" />
                    <SocialMediaItem image="https://www.pepsi.com/en-us/uploads/images/social-instagram.png?mtime=20180110134928" socialMediaHandle= "https://www.pepsi.com/en-us/assets/images/icon-instagram.0e3d410649ac6ffeefa45808120e1e95.svg"/>
                    <SocialMediaItem image="https://www.pepsi.com/en-us/uploads/images/social-youtube.png?mtime=20180110134934" socialMediaHandle="https://www.pepsi.com/en-us/assets/images/icon-youtube.0d901105ba15121b08030e8c9d1823ad.svg" />
                    <SocialMediaItem image="https://www.pepsi.com/en-us/uploads/images/social-tiktok.png" socialMediaHandle="https://www.pepsi.com/en-us/assets/images/icon-tiktok.svg" />
                </div>
            </div>
        </>
    )
}