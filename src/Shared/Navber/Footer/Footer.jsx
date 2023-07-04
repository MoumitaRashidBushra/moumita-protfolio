import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className=" bg-black ">
            <div className=" container lg:container  lg:mx-auto px-10 lg:px-20  ">


                <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 ml-4 justify-between   mx-auto  lg:gap-28 pb-10 text-white ">


                    <div className="col ml-20 lg:ml-10 lg:mt-16 mt-48 ">
                        <p className="font-bold mb-6">Quick access</p>
                        <p className="mt-4"><Link smooth to='#home' className='mt-4 text-white'>Home</Link></p>
                        <p className="mt-3 mb-3"><Link smooth to='#about' className='text-white'>About</Link></p>
                        <p><Link smooth to='#skill' className=' text-white'>Skill</Link></p>
                        <p className="mt-3 mb-3"><Link smooth to='#services' className='text-white'>Services</Link></p>
                        <p><Link smooth to='#projects' className='text-white'>Projects</Link>
                        </p>

                    </div>

                    <div className="col mt-16 ml-16 lg:ml-1  ">
                        <p className="font-bold  mb-6">Services</p>
                        <p className="mt-4">Front-end Development</p>
                        <p className="mt-3 mb-3">React Development</p>
                        <p>Figma To HTML File Convert</p>
                        <p className="mt-3 mb-3">
                            PSD To HTML File Convert
                        </p>

                    </div>

                    <div className="col mt-16  text-white ml-20 lg:ml-1">
                        <p className="font-bold  mb-6"> Social Media Links</p>
                        <p className="mt-4">Follow us on</p>
                        <div className='mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 '>
                            <a href="#"> <FaGithubSquare className='text-4xl '></FaGithubSquare></a>
                            <a href="https://www.linkedin.com/in/moumita-rashid-bushra-5715b6279/"> <FaLinkedin className='text-4xl '></FaLinkedin></a>
                            <a href="#"> <FaInstagramSquare className='text-4xl '></FaInstagramSquare></a>
                            <a href="#"> <FaTwitterSquare className='text-4xl '></FaTwitterSquare></a>

                        </div>


                    </div>





                </div>
                <div className="text-center pb-10 text-white">


                    <h1>© 2023 Moumita Rashid Bushra UIDesign.to - All rights reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;