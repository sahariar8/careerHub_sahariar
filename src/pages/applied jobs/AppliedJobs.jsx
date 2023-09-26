import { useEffect, useState } from "react";
import Applied from "../../components/Applied";


const AppliedJobs = () => {
    const [appliedJobs,setAppliedJob]=useState([]);
    const [noData,setNoData]=useState();
    useEffect(()=>{
        const jobs = JSON.parse(localStorage.getItem('Items'))
        if(jobs){
            setAppliedJob(jobs)
        }else{
            setNoData('No Data Found')
        }
    },[])
    return (
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <h1 className="text-center font-bold text-3xl py-10">Applied jOBS</h1>
        <div className="flex justify-end">
        <button className="btn btn-error text-white">Delete All</button>
        </div>
        {
            noData ? <h1 className="text-center text-3xl font-bold py-72">{noData}</h1>

             :
             <div className="grid grid-cols-1 pt-5 gap-5">
                {
                    appliedJobs.map(job=><Applied job={job} key={job.id}></Applied>)
                }
             </div>
        }
      </div>
    );
};

export default AppliedJobs;