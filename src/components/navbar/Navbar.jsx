const Navbar = () => {
     return (
          <div>
               <div className="navbar px-0 bg-base-100">
                    <div className="navbar-start">


                         <div className="dropdown dropdown-hover">
                              <div tabIndex={0} role="button" className="lg:hidden">
                                   <div className="w-10 rounded-full">
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-7 w-7"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                   </div>
                              </div>
                              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] right-0 w-54 left-0 p-2 shadow">
                                   <li><a>HOME</a></li>
                                   <li><a>RECEIPES</a></li>
                                   <li><a>ABOUT</a></li>
                                   <li><a>SEARCH</a></li>
                              </ul>
                         </div>
                         <a className="btn btn-ghost text-xl font-extrabold text-[#eb5971]">FOODIE</a>


                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 font-bold text-gray-500">
                              <li><a>HOME</a></li>
                              <li><a>RECEIPES</a></li>
                              <li><a>ABOUT</a></li>
                              <li><a>SEARCH</a></li>
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className="flex gap-2">
                              <div className="form-control">
                                   <input type="text" placeholder="Search" className="placeholder:text-white font-bold input input-bordered text-white w-24 md:w-auto bg-[#eb5971]" />
                              </div>
                              <div className="dropdown dropdown-hover">
                                   <div tabIndex={0} role="button" className="">
                                        <div className="w-10 rounded-full">
                                             <img className="rounded-full "
                                                  alt="Tailwind CSS Navbar component"
                                                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                   </div>
                                   <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] right-0 w-54 p-2 shadow">
                                        <li>
                                             <a className="justify-between">
                                                  Profile
                                                  <span className="badge">New</span>
                                             </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
               
          </div>
     );
};


export default Navbar;