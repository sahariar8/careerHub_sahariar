import { useEffect, useState } from "react";
import Job from "./Job";


const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
   useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
        
   },[])
    return (
            <div className="max-w-screen-xl mx-auto pt-20 mb-5">
                <h1 className="text-center text-5xl font-bold">Featured Jobs</h1>
                <p className="text-center pt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid md:grid-cols-2 gap-5 pt-8">
                {
                    jobs.map(job =><Job job={job} key={job.id}></Job>)
                    
                }
                </div>
            </div>  
    );
};

export default FeaturedJobs;