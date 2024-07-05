import quora from '../../../assets/Quora.png'
import study from '../../../assets/Study.png'
import travel from '../../../assets/Travel.png'

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto my-14">
            <h2 className="text-3xl text-center font-bold text-purple-600 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    {/* project 1 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className='h-[200px]'
                                src={quora}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Quora
                            </h2>
                            <p>A MERN-based website with multiple roles like admin and user, using Firebase and JWT for the authentication and MongoDB for database storage.</p>
                            <p><span className='font-bold'>Technologies:</span>#React #Express.js #Node.js #MongoDB #Firebase #JWT #Stripe</p>
                            <div className="card-actions justify-end">
                                <a href='https://github.com/islam-sharmin/Quora-client' className="badge badge-outline">GitHub</a>
                                <a href='https://quora-bec5a.web.app' className="badge badge-outline">Live Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* project 12*/}
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                className='h-[200px]'
                                src={study}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Study Sphere

                            </h2>
                            <p>Study Sphere revolutionizes online group study with dynamic, interactive sessions for students worldwide. It is a single page website with multiple routes.</p>
                            <p><span className='font-bold'>Technologies:</span>#React #Express.js #Node.js #MongoDB #Firebase #JWT #React-hooks</p>
                            <div className="card-actions justify-end">
                                <a href='https://github.com/islam-sharmin/Study-sphere-client' className="badge badge-outline">GitHub</a>
                                <a href='https://study-sphere-7da13.web.app' className="badge badge-outline">Live Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* project 3 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className='h-[200px]'
                                src={travel}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Travel Pro
                            </h2>
                            <p>Travel Pro, your ultimate destination for seamless tourism management! Whether you are a passionate traveler eager to explore new destinations.</p>
                            <p><span className='font-bold'>Technologies:</span>#Tailwind CSS #React #Express.js #Node.js #MongoDB #Firebase</p>
                            <div className="card-actions justify-end">
                                <a href='https://github.com/islam-sharmin/travel-pro-client' className="badge badge-outline">GitHub</a>
                                <a href='https://travel-pro-d2a9e.web.app' className="badge badge-outline">Live Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;