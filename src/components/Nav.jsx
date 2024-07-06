import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";


const Nav = () => {
  return (
    <div className="flex justify-between p-5 w-full bg-claro shadow-lg">
        <span className="mt-3"><AiFillHome className=" text-zinc-600 w-6 h-6 hover:cursor-pointer"/>
        </span>

        <div className="w-2/3 flex gap-3 pl-4 bg-zinc-100/70 rounded-lg">
          <span><CiSearch className="mt-2  text-zinc-600 w-6 h-6 hover:cursor-pointer"/>
          </span>
          <input className=" text-zinc-600 placeholder:text-zinc-600 bg-transparent  pl-3 w-full max-w-lg focus:outline-none" type="text" placeholder= "pesquisar..."/>
          
        </div>
        
         <div className="flex gap-7">
            <span> <FaShoppingCart className=" text-zinc-600 mt-2 w-6 h-6 hover:cursor-pointer"/> </span>
            <div className="w-11 h-11 rounded-full bg-gray-600 hover:cursor-pointer"> 
                
            </div>
        </div>
    </div>
  )
}

export default Nav