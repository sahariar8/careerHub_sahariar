import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,id} = job;
    return (
    
        <div className="border p-10 rounded-lg">
          <img src={logo} alt="" />
          <p className="text-xl font-semibold pt-4">
            {job_title}
          </p>
          <p className=" text-slate-500 pt-1">{company_name}</p>
          <div className="flex pt-2">
            <button className="text-sky-300 block px-3 border border-sky-300 py-1 rounded mr-3">
            {remote_or_onsite}
            </button>
            <button className=" text-sky-300 block px-3 border border-sky-300 py-1 rounded">
              {job_type}
            </button>
          </div>
          <div className="flex text-slate-500 mt-3">
            <p className="flex items-center ">
              <FaLocationDot /> <h3 className="ml-2">{location}</h3>
            </p>
            <p className="flex items-center ml-5">
              <AiOutlineDollarCircle />{" "}
              <h2 className="ml-2">Salary : {salary}</h2>
            </p>
          </div>
          <div className="mt-3">
            <NavLink
              to={`/job/${id}`}
              className="text-white btn bg-gradient-to-r from-indigo-500 to-indigo-400"
            >
              <button>View Details</button>
            </NavLink>
          </div>
        </div>

    );
};

export default Job;
