import profile from "../../../assets/profile.jpg"

const About = () => {
    return (
        <div className="my-14 max-w-5xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-8 text-purple-600">About Me</h2>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col gap-14 lg:flex-row">
                        <img
                            src={profile}
                            className="w-[400px] h-[300px] rounded-lg shadow-2xl" />
                        <div>
                            <p className="py-6">
                                I earned my degree in computer science and engineering from East West University. I put a lot of effort into my
                                studies, consider things thoroughly, and get along well with individuals. I enjoy the challenging tasks that
                                require solving problems and developing new skills.
                            </p>
                            <p>
                                🚀 I am enhancing my expertise in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and have hands-on experience working directly with ReactJS to build responsive and interactive user interfaces. My technical skills also include working with frontend development, backend development, and creating efficient RESTful APIs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;