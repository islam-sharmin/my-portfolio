import { Link } from "react-router-dom";
import portfolio from "../../../public/portfolio.png"


const Navbar = () => {

    const navLinks = <>
        <li><Link>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link>Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
    </>

    return (
        <div className="bg-purple-200">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[50px] h-[50px]" src={portfolio} alt="" />
                        <Link className="text-purple-600 text-3xl font-bold btn btn-ghost">Portfolio</Link>
                    </div>
                </div>
                <div className="hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;