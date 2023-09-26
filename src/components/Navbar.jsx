import { Link } from "react-router-dom";

const Navbar = () => {
    const Item = 
    <>
        <Link to='/' className="mr-3 text-base font-semibold">Statistics</Link>
        <Link to="/appliedjobs/:id" className="mr-3 text-base font-semibold">Applied Jobs</Link>
        <Link to="/blog" className="text-base font-semibold">Blog</Link>
        
    </>

return (
<div>
<div className="bg-sky-100">
 <div className="navbar  max-w-screen-xl mx-auto">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-base dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {Item}
        </ul>
        </div>
        <a className="font-bold text-2xl">CareerHub</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           {Item}
        </ul>
    </div>
    <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-indigo-500 to-blue-300 text-white">start Applying</a>
    </div>
</div>
</div>
</div>
);
};

export default Navbar;