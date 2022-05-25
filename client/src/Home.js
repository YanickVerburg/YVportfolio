import { MdContactSupport } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gradient-to-r from-[#D5BBFC] to-[#afecff] min-h-screen py-4">
      <div className="bg-glass w-8/12 h-[5.5rem] rounded-3xl m-auto backdrop-blur-sm pr-4">
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
    </div>
  );
}

export default Home;
