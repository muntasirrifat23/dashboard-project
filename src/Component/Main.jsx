import { Outlet } from "react-router-dom";
import Nav from "./Shared/Nav";

const Main = () => {
    return (
        <div className="bg-white text-black">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;