import { useEffect, useState } from "react";
import Category from "./Category";



const JobCategory = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="pt-20">
            <div>
                <h1 className="text-center text-5xl font-bold">Job Category List</h1>
                <p className="text-center pt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
             
            <div className="grid md:grid-cols-4 gap-5 pt-8 max-w-screen-xl mx-auto">
                {
                    categories.map(category =><Category category={category} key={category.id}></Category>)
                }
            </div>
            
        </div>
    );
};

export default JobCategory;