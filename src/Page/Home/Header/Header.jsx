import React from 'react';
//import { Link } from 'react-router-dom';
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link';
import { FaDownload } from "react-icons/fa";
//import resume from '../../../../public/Moumita Rashid Bushra's Resume.pdf';

const Header = () => {
    return (
        <div id='home'>
            {/* <div
                className="bg-no-repeat bg-center bg-contain lg:bg-cover relative w-full     "
                // bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80) `
                }}
            > */}

            <div
                className="relative w-full bg-no-repeat bg-center bg-contain lg:bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to right, #151515, rgba(21, 21, 21, 0)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80)`,
                    backgroundBlendMode: `overlay`,
                }}
            >






                <div>




                    <div className="hero-content text-center text-neutral-content container lg:container lg:mx-auto  lg:px-20  pb-6 pt-32 ">
                        <div className="">
                            {/* <h1
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="mb-2 lg:mb-5 text-xl lg:text-5xl font-bold">Moumita Rashid Bushra</h1>
                            <p
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="mb-2 lg:mb-5 text-xl lg:text-4xl">
                                Frontend Developer
                            </p> */}

                            <h1
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="mb-2 lg:mb-5 text-xl lg:text-5xl font-bold">Moumita Rashid Bushra</h1>
                            <p
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="mb-2 lg:mb-5 text-xl lg:text-4xl">
                                Frontend Developer
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="lg:pb-16 lg:mb-16 hidden lg:contents ">
                                front-end developer is like a magician who seamlessly blends design and functionality to create captivating user experiences. <br />  Front-end development is the art of blending creativity and code to build captivating digital experiences that leave a lasting impression. <br /> <br /> <button type='submit' ><a href="/public/Moumita Rashid Bushra's Resume (5).pdf" download className="btn btn-info text-white"><FaDownload></FaDownload> Resume</a></button> <br /> <br />
                            </p>

                        </div>
                    </div>

                </div>



            </div>
        </div >
    );
};

export default Header;