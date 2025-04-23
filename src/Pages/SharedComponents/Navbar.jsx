import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuthHook from '../../Hooks/useAuthHook';
import { Tooltip } from 'react-tooltip';
import websiteLogo from '../../assets/quires_logo.png'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
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

    // theme controller
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const links = <>
        <div className='lg:flex items-center justify-center'>
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
        <div className="navbar bg-primary text-white shadow sticky top-0 z-50 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FiMenu className='h-6 w-6'></FiMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-[50] mt-3 w-56 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost text-lg md:text-xl font-bold flex items-center">

                    <img src={websiteLogo} alt="Logo" className="w-7 md:w-10" />
                    <span className="">PerfectAlt</span>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* theme controller */}
                <label className="swap swap-rotate">
                    <input onChange={toggleTheme} type="checkbox" className="theme-controller" value="synthwave" />


                    <FiSun className='swap-on h-7 w-7 md:w-8 md:h-8'></FiSun>
                    <FiMoon className='swap-off h-7 w-7 md:w-8 md:h-8'></FiMoon>
                </label>
                {
                    user && user?.email ?
                        <div className='flex items-center gap-3'>
                            <div>
                                <img
                                    data-tooltip-id='my-tooltip'
                                    data-tooltip-content={user?.displayName}
                                    className='w-11 h-11 border border-black rounded-full'
                                    src={user?.photoURL}
                                    alt="User Avatar" />
                                <Tooltip id='my-tooltip'></Tooltip>
                            </div>
                            <button onClick={handleSignOut} className='btn btn-error text-black'>Logout</button>
                        </div> :
                        <div>
                            <Link className="btn btn-success text-white rounded-md shadow" to='/login'>Login</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;