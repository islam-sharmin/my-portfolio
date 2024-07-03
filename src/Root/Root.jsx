import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="bg-purple-100">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;