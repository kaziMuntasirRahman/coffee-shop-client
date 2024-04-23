import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 px-20 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to={'/coffees'}>Coffee List</NavLink></li>
            <li><NavLink to={'/addcoffee'}>Add Coffee</NavLink></li>
            <li><NavLink to={'/updatecoffee'}>Update Coffee</NavLink></li>
          </ul>
        </div>
        <img src='https://i.ibb.co/y6Cmc8v/java-joy-square-logo.jpg' className="h-20 rounded-md" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/coffees'}>Coffee List</NavLink></li>
          <li><NavLink to={'/addcoffee'}>Add Coffee</NavLink></li>
          {/* <li><NavLink to={'/updatecoffee'}>Update Coffee</NavLink></li> */}
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <NavLink className="btn btn-outline" to={'/signin'}>Sign In</NavLink>
        <NavLink className="btn btn-outline" to={'/signup'}>Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Navbar;