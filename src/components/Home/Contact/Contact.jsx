import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto my-20">
            <h2 className="text-center text-3xl font-bold mb-14 text-purple-600">Contact</h2>
            <div className="flex w-full flex-col justify-around lg:flex-row">
                <div className="card grid">
                    <div>
                        <div className="bg-base-300 px-5 py-12 w-[50%] md:w-full rounded-xl mb-5 mx-auto md-mx-0">
                            <p className=""><IoIosMail className="text-2xl" /></p>
                            <p>islam.sharmin111@gmail.com</p>
                        </div>
                        <div className="bg-base-300 px-5 py-12 w-[50%] md:w-full rounded-xl mx-auto md-mx-0">
                            <p><FaPhoneAlt className="text-2xl" /></p>
                            <p>+8801619595240</p>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="card bg-base-300 w-full max-w-sm flex-1 shrink-0 shadow-2xl mx-auto md-mx-0">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-purple-600 text-white">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;