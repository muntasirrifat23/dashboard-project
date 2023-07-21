import { BsChevronRight } from "react-icons/bs";
import './Right.css'
const Right = () => {
    // const rangeStyle = {
    //     background: 'blue',
    //     color:'red',
    // };
    // const thumbStyle = {
    //     background: 'white',
    //     border: '1px solid skyblue',
    // };

    return (
        <div className="lg:rounded-lg rounded-xl">
            <div className="bg-slate-100 px-20 pt-5 pb-10 mt-20 rounded-xl">

                {/* Retirement */}
                <h1 className="text-lg font-bold">Retirement Strategy</h1>
                <h2 className="font-semibold mt-4">Employee Contribution</h2>
                <div className="flex justify-between">
                      <input type="range" max="15" value="12" className="mt-2 in-range:border-sky-400 w-full mr-5 range-slider" />
                    <div className="font-semibold">12%</div>
                </div>

                <h2 className="font-semibold mt-4">Retirement Age</h2>
                <div className="flex justify-between">
                <input type="range" max="70" value="65" className="in-range:border-sky-400 w-full mr-5 range-slider mt-2" />
                    <div className="font-semibold">65</div>
                </div>
                <div className="flex justify-between mt-4">
                    <h2 className="font-semibold">Employee Contribution</h2>
                    <h3 className="font-semibold">8.4%</h3>
                </div>
                <div className="flex justify-between mt-4 mb-6">
                    <h2 className="font-semibold">Interest Rate</h2>
                    <h3 className="font-semibold">5%</h3>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-full text-center text-white">Update</button>
                <div className="flex text-blue-600 mt-6 text-center" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <h1>View Help Docs</h1>
                    <h1 className="mt-1"> <BsChevronRight /></h1>
                </div>
            </div>

            <div className="px-20 pt-5 pb-10 flex">
                <div>
                    <hr className="line mr-4" />
                </div>
                <div>
                    <h1 className="font-semibold">Are you considering a</h1>
                    <h1 className="font-bold">Housing Advance?</h1>
                    <h1 className="text-slate-500">Limited time reduce interest</h1>
                    <div className="flex text-blue-600">
                        <h1>Learn More </h1>
                        <h1 className="mt-1"><BsChevronRight /></h1>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Right;