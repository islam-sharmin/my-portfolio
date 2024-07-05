import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer bg-purple-500 text-white items-center p-4 mt-14">
            <aside className="grid-flow-col items-center">
                <h2 className="text-xl font-bold text-purple-700">S.Islam</h2>
                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.instagram.com/sharmin_._ritu/?hl=en">
                    <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/sharmin-islam-ritu">
                <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100022471551648">
                <FaFacebook className="text-2xl" />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;