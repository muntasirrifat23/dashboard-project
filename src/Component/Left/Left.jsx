import img1 from '../../../public/pic.jpg'
import { BsFillCaretDownFill } from "react-icons/bs";
 
const Left = () => {
    return (
        <div className='bg-slate-100 px-16 pt-10 pb-3'>
            {/* Header */}
            <div className='flex space-between mb-5'>
                <div className="text-xl">
                    <img src={img1} alt="" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
                </div>
                <div className="ml-5">
                    <h1 className="font-bold">Hi Rifat,</h1>
                    <h3 className='font-semibold'>Welcome Back.</h3>
                </div>
            </div>

            {/* Main 1 */}
            <div className='mt-10'>
                <h1 className='font-bold text-xl'>Today</h1>

                <div className='mt-3'>
                    <h1 className='font-bold text-4xl'>$19,892</h1>
                    <p className='text-slate-500 font-semibold'>Account Balance</p>
                </div>

                <div className='grid lg:grid-cols-1 grid-cols-2'>
                <div className='mt-3'>
                    <h1 className='font-bold text-xl'>$4,000</h1>
                    <p className='text-slate-500 font-semibold'>Year-to-Date Contribution </p>
                </div>
                <div className='mt-3'>
                    <h1 className='font-bold text-xl '>$1,892</h1>
                    <p className='text-slate-500 font-semibold'>Total Interest</p>
                </div>
                </div>
                
                {/* Button */}
                <button className="btn btn-primary p-4 text-center mt-6 px-6 sm:w-full text-white">I want to<BsFillCaretDownFill/></button>
            </div>

            {/* Main 2 */}
            <div className='mt-20'>
                <h1 className='font-bold text-xl'>
                    Recent Transactions
                </h1>

                <h2 className='text-slate-500 mt-10'> 2020-08-07 </h2>
                <h1 className='font-semibold'>
                Withdrawal Transfer to Bank-XXX11
                </h1>
                <h5 className='mt-2' style={{width:'40%',}}></h5>
                <hr className='w-1/2 lg:w-full'/><hr className='w-1/2 lg:w-full'/>

                <h2 className='text-slate-500 mt-6'> 2020-08-07 </h2>
                <h1 className='font-semibold'>
                Withdrawal Transfer to Bank-XXX11
                </h1>
                <h5 className='mt-2' style={{width:'40%',}}></h5>
                <hr className='w-1/2 lg:w-full'/><hr className='w-1/2 lg:w-full'/>


                <h2 className='text-slate-500 mt-6'> 2020-08-07 </h2>
                <h1 className='font-semibold'>
                Withdrawal Transfer to Bank-XXX11
                </h1>
                <h5 className='mt-2' style={{width:'40%',}}></h5>
                <hr className='w-1/2 lg:w-full'/><hr className='w-1/2 lg:w-full'/>
            </div>


        </div>
    );
};

export default Left;