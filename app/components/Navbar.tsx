import { LuMessageCircleMore } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end p-4">
      {/* <div>Search</div> */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <LuMessageCircleMore className="text-gray-500 text-2xl" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <GrAnnounce className="text-gray-500 text-2xl" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm">
            2
          </div>
        </div>
        <div>
          <span className="text-xs leading-3 font-medium">John Doe</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
