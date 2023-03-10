
import Image from "next/image"
import Link from "next/link"
export default function author() {
  return (
    <div className="author flex py-5">
        <Image src={"/images/girl.svg"} width={60} height={60} className="rounded-full"/> 
        
        <div className="flex flex-col justify-center px-4">

            <Link href={"/"} className="text-md  font-bold text-gray-800 hover:text-gray-400">Nature-Lover</Link>
            <span className="text-sm text-gray-500">Developer</span>
        </div>
        </div>
  )
}

