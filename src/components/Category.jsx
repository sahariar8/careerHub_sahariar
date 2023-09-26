import React from 'react';

const Category = ({category}) => {
    const {logo,category_name,availability} = category;
    return (
        <div className="bg-sky-100 p-10 rounded-lg">
            <img src={logo} alt="" className="bg-sky-200 p-2 rounded"/>
            <h1 className="text-xl font-semibold pt-5 ">{category_name}</h1>
            <h1 className="text-sm text-slate-500 pt-2">{availability}</h1>
        </div>
     
    );
};

export default Category;