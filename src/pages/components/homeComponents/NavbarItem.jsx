export function NavbarItem({ name }){
    return(
        <>
            <div className="pl-20 cursor-pointer hover:underline">{name}</div>
        </>
    )
}