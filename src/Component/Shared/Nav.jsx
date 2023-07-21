import { PiHouseLineBold, PiButterflyLight } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import { BsCardList } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import './Nav.css'

const Nav = () => {
    return (
        <div >
            <div className="navbar text-black bg-white mr-5">

                <div className="navbar-start">
                    {/* small */}
                    <div className="navbar-center p-5 text-white lg:hidden  fixed z-10 w-full text-white bottom-0 rounded-xl">
                        <ul className="menu menu-horizontal px-1 text-2xl text-black rounded-xl font-bold flex justify-between items-center text-slate-500">
                            <a className=' mt-2'> <PiHouseLineBold /></a>
                            <a className='mt-2'> <ImNewspaper /></a>
                            <a className='mt-2'> <BsCardList /></a>
                            <a className='mt-2'> <FaRegUser /></a>
                            <a className='mt-2'> <BiSearch /></a>
                        </ul>
                    </div>

                </div>
                {/* big */}
                <div className="navbar-center hidden lg:flex p-5 mb-15 z-10 justify-between fixed z-10 text-black top-0 left-side-navigation">
                    <div className="justify-between ">
                        <div>
                        <div className="text-black text-2xl text-slate-500 flex-cols justify-between fixed top-0 top-5">
                                <p className='mt-5 font-bold text-blue-400'> <PiButterflyLight /></p>
                                <p className='mt-2'> <BiSearch /></p>
                            </div>
                        </div>
                        <div>
                            <div className="text-black text-2xl text-slate-500 justify-between fixed top-40">
                                <p className='mb-9'> <PiHouseLineBold /></p>
                                <p className='mt-9'> <ImNewspaper /></p>
                                <p className='mt-9'> <BsCardList /></p>
                                <p className='mt-9'> <FaRegUser /></p>
                            </div>
                        </div>
                        {/* bottom */}
                        <div>
                        <div className="text-black text-2xl text-slate-500 flex-rows space-between fixed bottom-0 bottom-4">
                            <p className=''> <MdNotifications /></p>
                            <p className='mt-5'> <IoLogOutOutline /></p>
                        </div>
                    </div>
                    </div>
                    
                   
                </div>


            </div>


        </div>
    );
};

export default Nav;