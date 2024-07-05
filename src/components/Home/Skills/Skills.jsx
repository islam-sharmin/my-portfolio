import { CiStar } from "react-icons/ci";


const Skills = () => {
    return (
        <div className="max-w-5xl mx-auto my-14">
            <h2 className="text-3xl text-center font-bold text-purple-600">Skills</h2>
            <div className="border border-purple-600 w-[70%] mx-auto rounded-2xl mt-8 py-6 px-10">
                <h2 className="text-2xl text-center font-semibold mb-6 underline">Web Development</h2>
                <div className="grid grid-cols-2 gap-5 w-[70%] mx-auto mr-10">
                <p className="flex gap-2 items-center"><CiStar />HTML5</p>
                <p className="flex gap-2 items-center"><CiStar />CSS3</p>
                <p className="flex gap-2 items-center"><CiStar />Tailwind CSS</p>
                <p className="flex gap-2 items-center"><CiStar />Daisy UI</p>
                <p className="flex gap-2 items-center"><CiStar />JavaScript</p>
                <p className="flex gap-2 items-center"><CiStar />DOM</p>
                <p className="flex gap-2 items-center"><CiStar />React</p>
                <p className="flex gap-2 items-center"><CiStar />Node.JS</p>
                <p className="flex gap-2 items-center"><CiStar />Express.JS</p>
                <p className="flex gap-2 items-center"><CiStar />MongoDB</p>
                <p className="flex gap-2 items-center"><CiStar />Firebase</p>
                <p className="flex gap-2 items-center"><CiStar />JWT</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;