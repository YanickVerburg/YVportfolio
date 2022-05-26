import { MdContactSupport } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gradient-to-r from-[#D5BBFC] to-[#afecff] min-h-screen ">
      {/* <div className="w-full h-full min-h-screen bg-gradient-to-bl from-[#A4A3EE] via-[#E5D8FF] to-[#EC66DA] opacity-70 z-10"> */}
      {/* <div className="w-ful h-full min-h-screen bg-gradient-to-tr from-[#af44a1]  to-[#399bd4] pt-4 opacity-60 z-10"> */}
      <div className="bg-glass w-8/12 h-[5.5rem] rounded-3xl m-auto backdrop-blur-sm pr-4 z-50">
        <div className="flex flex-row h-full items-center justify-end text-purple-dark gap-12 ">
          <div className="nav-item">
            <GoFileSubmodule />
            <h6>Work</h6>
          </div>
          <div className="nav-item">
            <MdContactSupport />
            <h6>About</h6>
          </div>
          <div className="nav-item">
            <AiFillContacts />
            <h6>Contact</h6>
          </div>
          <button className="nav-item text-light bg-gradient-to-tl from-[#6f11f5] to-[#cfb4f5] py-3 px-10 rounded-xl ">
            <FaPlane />
            <h6>Fly-n</h6>
          </button>
        </div>
      </div>
      {/* BALL 1 */}
      <div className="h-52 w-52 rounded-full bg-gradient-to-tr from-[#9E99F8] via-[#1CECFC] to-[#8EF7FE]  ">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-[#1CECFC] via-[#9E99F8] to-[#9E99F8] opacity-70">
          <div className="w-full h-full rounded-full bg-gradient-to-t from-[#f1ea1c] via-[#9E99F8] to-[#e61cfc] opacity-40"></div>
        </div>
      </div>
      <div className="h-52 w-52 rounded-full bg-gradient-to-br from-[#9994F9]  via-[#FE9FEB] to-[#FC585C]  ">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-[#8A8FF5] via-[##FF96E0] to-[#FF8FA0] opacity-90">
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#A0CCF8] via-[#FF96E0] to-[#F54F6C] opacity-90"></div>
        </div>
      </div>
      {/* </div> */}
      {/*  </div> */}
    </div>
  );
}

export default Home;
