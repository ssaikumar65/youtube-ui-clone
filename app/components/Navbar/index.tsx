import { HiOutlineMenu, HiOutlineUserCircle } from "react-icons/hi";
import {
  BsYoutube,
  BsThreeDotsVertical,
  BsFillMicFill,
  BsSearch,
} from "react-icons/bs";
const Navbar = () => {
  return (
    <div className=" flex justify-between px-6 py-2 ">
      <div className=" flex gap-5">
        <div className=" flex items-center w-10 h-10 justify-center rounded-full cursor-pointer hover:bg-zinc-800">
          <HiOutlineMenu size={25} />
        </div>
        <div className=" flex items-center gap-1 font-bold text-lg cursor-pointer">
          <BsYoutube color="red" size={25} />
          Youtube
        </div>
      </div>
      <div className=" hidden md:flex gap-5 items-center justify-between w-1/2">
        <div className=" flex flex-1 justify-between items-center gap-1 border-2 overflow-hidden border-zinc-800 rounded-full">
          <input
            className=" bg-transparent py-2 px-4 w-full text-sm font-medium placeholder:text-zinc-500 outline-none"
            placeholder="Search"
          />
          <div className=" px-4 py-2 bg-zinc-800 cursor-pointer">
            <BsSearch size={20} />
          </div>
        </div>
        <div className=" flex items-center w-10 h-10 justify-center bg-zinc-900 rounded-full cursor-pointer hover:bg-zinc-800">
          <BsFillMicFill size={18} />
        </div>
      </div>
      <div className=" flex gap-5">
        <div className=" flex items-center w-10 h-10 justify-center rounded-full cursor-pointer hover:bg-zinc-800">
          <BsThreeDotsVertical size={20} />
        </div>
        <div className=" flex items-center gap-1 text-sm font-semibold text-blue-400 cursor-pointer border-2 border-zinc-800 rounded-full px-2 py-1 hover:bg-blue-400 hover:bg-opacity-30 ">
          <HiOutlineUserCircle size={25} />
          Sign in
        </div>
      </div>
    </div>
  );
};
export default Navbar;
