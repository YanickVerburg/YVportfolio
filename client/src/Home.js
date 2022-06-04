import { MdContactSupport } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gradient-to-r from-[#D5BBFC] to-[#afecff] min-h-screen">
      <div className="relative py-4">
        <div className="absolute w-full h-full min-h-screen inset-0 bg-gradient-to-bl from-[#d0cff9] via-[#e9e2f9] to-[#ffa7f3] opacity-70 "></div>
        <div className="absolute w-ful h-full min-h-screen inset-0 bg-gradient-to-tr from-[#fd7eec]  transparent opacity-60"></div>
        <div className="absolute w-ful h-full min-h-screen inset-0 bg-gradient-to-bl from-[#cde1ff]  to-[#ffddfa] opacity-60"></div>
        <div className="bg-glass w-8/12 h-[5.5rem] rounded-3xl m-auto backdrop-blur-sm pr-4 z-50">
          <div className="relative flex flex-row h-full items-center justify-end text-purple-dark gap-12 z-50">
            <div className="nav-item group ">
              <GoFileSubmodule className="group-hover:text-purple" />
              <h6>Work</h6>
            </div>
            <div className="nav-item group">
              <MdContactSupport className="group-hover:text-purple" />
              <h6>About</h6>
            </div>
            <div className="nav-item group">
              <AiFillContacts className="group-hover:text-purple" />
              <h6>Contact</h6>
            </div>
            <div className="relative group">
              <div className="absolute inset-0.5 bg-[#6f11f5] group-hover:blur transition duration-200 rounded-xl "></div>
              <button className="relative nav-item text-white bg-gradient-to-tl from-[#6f11f5] to-[#cfb4f5] py-3 px-10 rounded-xl">
                <FaPlane />
                <h6>Fly-n</h6>
              </button>
            </div>
          </div>
        </div>
        {/* BALL 1 */}
        <div className="relative h-52 w-52">
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-[#9E99F8] via-[#1CECFC] to-[#8EF7FE]  "></div>
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-l from-[#1CECFC] via-[#9E99F8] to-[#9E99F8] opacity-70"></div>
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-t from-[#f1ea1c] via-[#9E99F8] to-[#e61cfc] opacity-40"></div>
        </div>
        {/* BALL 2 */}
        <div className="relative h-52 w-52">
          <div className="absolute inset-0 w-full h-ull rounded-full bg-gradient-to-br from-[#9994F9]  via-[#FE9FEB] to-[#FC585C]  "></div>
          <div className="aboslute inset-0 w-full h-full rounded-full bg-gradient-to-t from-[#8A8FF5] via-[##FF96E0] to-[#FF8FA0] opacity-90"></div>
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tl from-[#A0CCF8] via-[#FF96E0] to-[#F54F6C] opacity-90"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
