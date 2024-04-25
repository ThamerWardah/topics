import Image from "next/image";
const Header = ()=>{
   
    return(
        <div className="bg-black flex justify-between items-center text-gray-400 px-2 py-4 font-bold fixed w-full top-0 right-0 z-20">
        <h1>My Topics</h1>
        <Image src='/dolma.jpg'
        width={64}
        height={64}
        alt="Profile"
        className="rounded-full" />
        </div>
    )
}

export default Header ;