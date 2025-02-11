import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuthHook from '../../Hooks/useAuthHook';
import { Tooltip } from 'react-tooltip';
import websiteLogo from '../../assets/quires_logo.png'
const Navbar = () => {

    const { user, loading, signOutUser } = useAuthHook();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                // console.log('Sign out');
            })
            .catch(error => {
                // console.log(error.message);
            })
    }

    const links = <>
        <div className='lg:flex items-center justify-center gap-1'>
            {
                user ?
                    <>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/queries'>Queries</NavLink></li>
                        <li><NavLink to='/recommendationsForMe'>Recommendations For Me</NavLink></li>
                        <li><NavLink to='/myQueries'>MY Queries</NavLink></li>
                        <li><NavLink to='/myRecommendations'>My Recommendations</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                    </>
                    :
                    <>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/queries'>Queries</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                    </>
            }
        </div>
    </>

    return (
        <div className="navbar bg-[#27006f] text-white sticky top-0 z-50 px-6 md:px-10 lg:px-20">
        {/* <div className="navbar bg-[#27006f] text-white fixed top-0 z-50 px-20"> */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#27006f] text-white rounded-box z-[50] mt-3 w-56 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img className='w-10' src={websiteLogo} alt="" />
                    PerfectAlt
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ?
                        <div className='flex items-center gap-3'>
                            <div>
                                <img
                                    data-tooltip-id='my-tooltip'
                                    data-tooltip-content={user?.displayName}
                                    className='w-12 h-12 border border-black rounded-full'
                                    src={user?.photoURL}
                                    alt="User Avatar" />
                                <Tooltip id='my-tooltip'></Tooltip>
                            </div>
                            <button onClick={handleSignOut} className='btn btn-error'>Logout</button>
                        </div> :
                        <div>
                            <Link className="btn btn-success text-white" to='/login'>Login</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;