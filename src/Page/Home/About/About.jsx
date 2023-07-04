import React, { useEffect } from 'react';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='container lg:container lg:mx-auto  px-6 lg:px-20 lg:pt-8 pb-16 ' id='about'>
            <h2 className='text-center text-4xl font-bold pt-8 pb-10'>About Me</h2>

            <h2
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-center text-2xl lg:text-3xl font-bold px-4'>Hello I'am Moumita Rashid Bushra</h2>
            <h1
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-2xl pt-3 pb-16 font-semibold text-center">Front-end Developer!!! </h1>


            <div className='flex flex-col lg:flex-row justify-between items-center gap-12 px-4'>
                <div
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='w-full lg:w-1/2 relative  '>
                    <img src='https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt="" className='w-3/4 rounded-lg' />
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80" className='w-1/2 absolute top-1/2 right-5    border-8 border-white rounded-lg' alt="" />


                </div>
                <div className='w-full lg:w-1/2 ml-1 lg:ml-6 '>



                    <p
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="pt-2 pb-6  "> I am studying in  Computer Science Engineering studying at Bangladesh University of Business and Technology (BUBT).
                    </p>

                    <p
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='pb-6'
                    >Front-end development is not only my area of expertise but also my true passion.One of my biggest strengths is my adaptability and flexibility in different situations.   </p>


                    {/* <div data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className=' flex  gap-4 lg:gap-16 pt-4  '>
                        <a href="https://github.com/MoumitaRashidBushra"> <FaGithubSquare className='text-4xl '></FaGithubSquare></a>
                        <a href="https://www.linkedin.com/in/moumita-rashid-bushra-5715b6279/"> <FaLinkedin className='text-4xl '></FaLinkedin></a>
                        <a href="3"> <FaInstagramSquare className='text-4xl '></FaInstagramSquare></a>
                        <a href=""> <FaTwitterSquare className='text-4xl '></FaTwitterSquare></a>
                    </div> */}

                </div>

            </div>






        </div>
    );
};

export default About;