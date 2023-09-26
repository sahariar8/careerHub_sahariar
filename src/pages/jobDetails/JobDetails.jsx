import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id);
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information} = job;
    console.log(job);
    const handleApplyJobButton = () =>{
        const appliedJobArray = [];
        const jobInfos = JSON.parse(localStorage.getItem('Items'));
        if(!jobInfos){
            appliedJobArray.push(job);
            localStorage.setItem('Items',JSON.stringify(appliedJobArray));
        }else{
            const isExist = jobInfos.find(jobInfo => jobInfo.id == id);
            if(!isExist){
                appliedJobArray.push(...jobInfos,job)
                localStorage.setItem('Items',JSON.stringify(appliedJobArray))
                Swal.fire(
                    'Good job!',
                    'Applied Successfully!',
                    'success'
                  )
            }else{
                Swal.fire(
                    'Error',
                    'Already Applied This Post!',
                    'error'
                  )
            }
           
        }
    }
    return (
        <div>
           <div className='bg-sky-100 flex'>
                <div>
                    <img src="../assets/images/bg1.png" alt="" />
                </div>
                <div className='w-2/3 pt-20'>
                    <h1 className='text-center text-3xl font-bold'>Job Details</h1>
                </div>
                  
           </div>
           <div className='max-w-screen-xl mx-auto flex  py-20'>
            <div className='w-3/4'>
                <p className='mb-2'><span className='font-bold'>job Description :</span> <span className='text-sm text-slate-600'>{job_description}</span></p>
                <p className='mb-2'><span className='font-bold'>job Responsibility :</span> <span className='text-sm text-slate-600'>{job_responsibility}</span></p>
                <p className='mb-2'><span className='font-bold'>Educational Requirements :</span> <br /><span className='py-2 text-sm text-slate-600'>{educational_requirements}</span></p>
                <p className='mb-2'><span className='font-bold'>Experiences :</span> <br /><span className='py-2 text-sm text-slate-600'>{experiences}</span></p>
            </div>
            <div className='bg-sky-100 w-1/4 p-3'>
               <p className='font-bold mb-4'>Job Details</p>
               <hr className="mb-1  bg-sky-500 h-[2px]" />
               <div className="flex items-center">
                    <div>
                        <p className="text-sky-600"><AiOutlineDollarCircle ></AiOutlineDollarCircle></p>
                    </div>
                    <div>
                        <p className='py-1 ml-2'><span className='font-bold'>Salary :</span><span className="font-semibold text-slate-500"> {salary} (Per Month) </span></p>
                    </div>    
               </div>
               <div className="flex items-center">
                    <div>
                        <p className="text-sky-600"><BsFillCalendarDateFill></BsFillCalendarDateFill></p>
                    </div>
                    <div>
                        <p className='py-1 ml-2'><span className='font-bold'>Job Title :</span><span className="font-semibold text-slate-500"> {job_title}</span></p>
                    </div>    
               </div>
               <p className='font-bold mb-4 pt-4'>Contact Information</p>
               <hr className="mb-1 bg-sky-500 h-[2px]" />
               <div className="flex items-center">
                    <div>
                        <p className="text-sky-600"><BsFillCalendarDateFill></BsFillCalendarDateFill></p>
                    </div>
                    <div>
                        <p className='py-1 ml-2'><span className='font-bold'>Phone :</span><span className="font-semibold text-slate-500"> {contact_information.phone}</span></p>
                    </div>    
               </div>
               <div className="flex items-center">
                    <div>
                        <p className="text-sky-600"><BsFillCalendarDateFill></BsFillCalendarDateFill></p>
                    </div>
                    <div>
                        <p className='py-1 ml-2'><span className='font-bold'>Email :</span><span className="font-semibold text-slate-500"> {contact_information.email}</span></p>
                    </div>    
               </div>
               <div className="flex">
                    <div>
                        <p className="text-sky-600 pt-2"><FaLocationDot></FaLocationDot></p>
                    </div>
                    <div>
                        <p className='py-1 ml-2'><span className='font-bold'>Address:</span><span className="font-semibold text-slate-500"> {contact_information.address}</span></p>
                    </div>    
               </div>
              <Link to={`/appliedjobs/${id}`}><button onClick={handleApplyJobButton} className="btn w-full bg-gradient-to-r from-indigo-500 to-blue-300">Apply Now</button></Link>
            </div>
           </div>
        </div>
    );
};

export default JobDetails;