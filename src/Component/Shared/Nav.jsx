
const Nav = () => {
    return (
        <div >
            <div className="navbar text-white bg-base-800">
                
                <div className="navbar-start">
                        {/* small */}  
                        <div className="navbar-center p-5 mb-15 text-white lg:hidden flex justify-center items-center fixed z-10 w-full text-white bottom-0 rounded-xl">
                        <ul className="menu menu-horizontal px-1 text-2xl text-white bg-slate-800 rounded-xl bg-opacity-80 font-bold">
                        <a className='ml-10 mt-2' href='#header'></a>
                        <a className='ml-10 mt-2' href='#project'></a>
                        <a className='ml-10 mt-2' href='#mySelf'></a>
                        <a className='ml-10 mr-10 mt-2 mb-2' href='#contact'></a>
                    </ul>
                    </div>
                   

                    {/* name */}
                    <div className='font-bold text-4xl ml-2' style={{ display: 'flex', alignItems: 'center' }}>
                        MERN Stack Developer
                    </div>
                </div>
                {/* big */}
                
                <div className="navbar-center hidden lg:flex top-0 p-5  mb-15 z-10  text-white flex justify-center items-center fixed z-10 w-full text-white top-0 rounded-xl ">
                    <ul className="menu menu-horizontal px-1 text-xl text-white bg-slate-800 rounded-xl bg-opacity-60">
                        <a className='ml-3 mt-2' href='#header'> Home</a>
                        <a className='ml-3 mt-2' href='#project'>Project</a>
                        <a className='ml-3 mt-2' href='#mySelf'>My-Self</a>
                        <a className='ml-3 mt-2 mr-3' href='#contact'> Contact</a>
                    </ul>
                </div>


                <div className="navbar-end">
                    <button></button>

                </div>



            </div>


        </div>
    );
};

export default Nav;