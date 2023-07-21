import './Center.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CompoChart from './CompoChart';

const Center = () => {
    const percentage = 78;
    const percentage1 = 95;
    const percentage2 = 59;

    const hrStyle = {
        borderTop: '2px solid blue',
    };
    
    return (
        <div className="px-24 sm:pt-10 pb-10">
            <div>
                <h2 className="text-blue-800 font-bold">Retirement Income</h2>
                <h1 className="text-2xl font-semibold mb-5">Starting Year 2056</h1>

                <div className='lg:flex'>
                    <div className='mt-3 mr-7'>
                        <h1 className='font-bold text-2xl'>$300,000</h1>
                        <p className='text-slate-500 font-semibold mb-2'>My Goal</p>
                        <hr style={hrStyle} />
                    </div>

                    <div className='flex '>
                        <div className='mt-3 mr-7'>
                            <h1 className='font-bold text-2xl'>59%</h1>
                            <p className='text-slate-500 font-semibold mb-2'>Goal Achieve</p>
                            <hr style={hrStyle} />
                        </div>
                        <div className='mt-3'>
                            <h1 className='font-bold text-2xl'>K 300</h1>
                            <p className='text-slate-500 font-semibold mb-2'>Est. Monthly Income </p>
                            <hr style={hrStyle} />
                             
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className='mt-8'>
                <h1 className='font-bold text-2xl mb-3'>Contribution Overtime</h1>
                <div className='flex mb-6' style={{ justifyContent: 'space-between' }}>
                    <div className='lg:flex'>
                        <h1> </h1>
                        <h2 className='font-semibold text-slate-500'>Employer: </h2>
                        <h3 className='font-semibold lg:ml-2'> K 73,500</h3>
                    </div>
                    <div className='lg:flex'>
                        <h1> </h1>
                        <h2 className='font-semibold text-slate-500'>Employee: </h2>
                        <h3 className='font-semibold lg:ml-2'> K 52,500</h3>
                    </div>
                    <div className='lg:flex'>
                        <h1> </h1>
                        <h2 className='font-semibold text-slate-500'>Total Interest: </h2>
                        <h3 className='font-semibold lg:ml-2'> K 244,313</h3>
                    </div>
                </div>
                <div>
                    <CompoChart></CompoChart>
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
                            <BsFillCaretDownFill className='mt-1 ml-1 text-slate-500 ' />
                        </div>
                        <hr />

                        <div className='flex mt-3 mb-3'>
                            <p><span className='font-semibold'>Salary:</span> K 20 - k 30</p>
                            <BsFillCaretDownFill className='mt-1 ml-1 text-slate-500 ' />
                        </div>
                        <hr />

                        <div className='flex mt-3 mb-3'>
                            <p><span className='font-semibold'>Age:</span> Gender Male</p>
                            <BsFillCaretDownFill className='mt-1 ml-1 text-slate-500 ' />
                        </div>
                        <hr />
                    </div>

                    {/* Progress */}
                    <div className='lg:ml-20 flex mx-auto mb-10 lg:justify-between sm:justify-between mt-2'>
                        <div className='mr-4' style={{ width: 100, height: 10 }}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={{
                                    path: {
                                        stroke: '#3bd491',
                                    },
                                    trail: {
                                        stroke: '#c3e8d8',
                                    },
                                    text: {
                                        fill: 'black',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <div className='text-center font-semibold'>Average</div>
                        </div>

                        <div className='mr-4' style={{ width: 100, height: 10 }}>
                            <CircularProgressbar
                                value={percentage1}
                                text={`${percentage1}%`}
                                styles={{
                                    path: {
                                        stroke: '#3bd491',
                                    },
                                    trail: {
                                        stroke: '#c3e8d8',
                                    },
                                    text: {
                                        fill: 'black',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <div className='text-center font-semibold'>Top</div>
                        </div>

                        <div style={{ width: 100, height: 10 }}>
                            <CircularProgressbar
                                value={percentage2}
                                text={`${percentage2}%`}
                                styles={{
                                    path: {
                                        stroke: '#3bd491',
                                    },
                                    trail: {
                                        stroke: '#c3e8d8',
                                    },
                                    text: {
                                        fill: 'black',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <div className='text-center font-semibold'>Me</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Center;