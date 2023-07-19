import './Center.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const Center = () => {
    return (
        <div className="px-8 pt-10 pb-10">
            <div>
                <h2 className="text-blue-800 font-bold">Retirement Income</h2>
                <h1 className="text-2xl font-semibold mb-5">Starting Year 2056</h1>

                <div className='lg:flex justify-between'>
                    <div className='mt-3 mr-5'>
                        <h1 className='font-bold text-2xl'>$300,000</h1>
                        <p className='text-slate-500 font-semibold mb-2'>My Goal</p>
                        <div>
                            <hr style={{ color: 'blue' }} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mt-3 mr-5'>
                            <h1 className='font-bold text-2xl'>$300,000</h1>
                            <p className='text-slate-500 font-semibold mb-2'>My Goal</p>
                            <div>
                                <hr style={{ color: 'blue' }} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h1 className='font-bold text-2xl'>$300,000</h1>
                            <p className='text-slate-500 font-semibold mb-2'>My Goal</p>
                            <div>
                                <hr style={{ color: 'blue' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bellow Part */}
            <div className='mt-5'>
                <div>
                    <h1 className='font-bold text-xl'>How do I compare to my peers?</h1>
                    <h2 className='font-semibold text-slate-500 mt-2'>These numbers represent current goal achievement</h2>
                </div>

                <div className='mt-10 lg:flex'>
                    <div>
                        <div className='flex mb-3'>
                        <p><span className='font-semibold'>Age:</span> Under 30</p>
                        <BsFillCaretDownFill className='mt-1 ml-1 text-slate-500 '/>
                        </div>
                        <hr />

                        <div className='flex mt-3 mb-3'>
                        <p><span className='font-semibold'>Salary:</span> K 20 - k 30</p>
                        <BsFillCaretDownFill className='mt-1 ml-1 text-slate-500 '/>
                        </div>
                        <hr />

                        <div className='flex mt-3 mb-3'>
                        <p><span className='font-semibold'>Age:</span> Gender Male</p>
                        <BsFillCaretDownFill className='mt-1 ml-1 text-slate-500 '/>
                        </div>
                        <hr />
                    </div>

                    <div>
                        hhj
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Center;