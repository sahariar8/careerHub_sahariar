import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-sky-100">
        <div className="flex flex-col md:max-w-screen-2xl mx-auto  md:justify-between md:flex-row">
          <div className=" ml-10 md:ml-32 order-2 md:order-first">
            <p className="text-6xl font-bold leading-tight pt-32 mb-5">
              {" "}
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-indigo-500">Dream Job</span>
            </p>
            <p className="mb-3">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br /> your job application from start to finish.
            </p>
            <NavLink
              to="/path"
              className="text-white btn bg-gradient-to-r from-indigo-500 to-indigo-300"
            >
              <button>Get Started</button>
            </NavLink>
          </div>
          <div className="order-1 md:order-last">
            <img src="assets/images/user.png" alt="" className="h-[600px] " />
          </div>
        </div>
      </div>
      );
};

export default Banner;