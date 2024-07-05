import resume from "./Sharmin's Resume.pdf"
import { IoMdCloudDownload } from "react-icons/io";

const Intro = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mt-14 space-y-4">
                <h2 className="text-2xl font-bold"><span className="text-purple-600">Hello!</span> I am</h2>
                <h1 className="text-5xl font-bold">Sharmin Islam</h1>
                <p className="text-xl font-bold text-purple-600">Web Developer</p>
                <p className="w-[70%] mx-auto">I earned my degree in computer science and engineering from East West University. I put a lot of effort into my
                    studies, consider things thoroughly, and get along well with individuals. I enjoy the challenging tasks that
                    require solving problems and developing new skills.</p>
            </div>
            <div className="text-center mt-6">
            <a className="btn bg-purple-500 text-white py-3 px-5 font-semibold mr-2" download href={resume}>Download Resume <IoMdCloudDownload className="text-xl" /></a>
            </div>
        </div>
    );
};

export default Intro;