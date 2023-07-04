import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
//import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Navber = () => {
    return (
        <div>
            <div className=''>
                <div className='flex flex-col  lg:flex-row  justify-between items-center   lg:mx-auto  lg:px-20 lg:pt-8 lg:pb-6 fixed z-10  bg-slate-800 bg-opacity-30 max-w-screen-4xl w-full '>
                    <div className='flex'>



                        <a className="btn btn-ghost normal-case text-2xl font-extrabold text-white">Moumita</a>
                    </div>

                    <div className='mx-2' >

                        <Link smooth to='#home' className='mx-2 lg:mx-4 text-white'>Home</Link>
                        <Link smooth to='#about' className='mx-2 lg:mx-4 text-white'>About</Link>
                        <Link smooth to='#skill' className='mx-2 lg:mx-4 text-white'>Skill</Link>
                        <Link smooth to='#services' className='mx-2 lg:mx-4 text-white'>Services</Link>
                        <Link smooth to='#projects' className='mx-2 lg:mx-4 text-white'>Projects</Link>


                    </div>

                    <div className='flex justify-between items-center gap-4'>

                        <div>
                            <Link smooth to='#contact' className='mx-2 lg:mx-4 text-white btn btn-info px-3'>Contact</Link>
                            <button type='submit' ><a href="/public/Moumita Rashid Bushra's Resume (5).pdf" download className="btn  btn-info text-white "><FaDownload></FaDownload> Resume</a></button>


                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navber;