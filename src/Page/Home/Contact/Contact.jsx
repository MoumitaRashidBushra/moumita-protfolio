import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4v64485', 'template_60rbdg1', form.current, 'zIrUpqVOwxhWooDNV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 ' id='contact'>
            <h2 className='text-center text-4xl font-bold pt-8 pb-6'>Connect With Me</h2>
            <p data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-center pb-6 px-20'>Transforming ideas into stunning digital solutions.Need a frontend developer to bring your projects to life? Look no further. Get in touch with me and let's craft remarkable web experiences.</p>

            <div className="flex flex-col lg:flex-row justify-between  items-center gap-8 lg:gap-20 lg:px-16 ">



                <div className='px-10 lg:px-2'>
                    <h1 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="text-4xl font-bold pb-4 " >Let's turn your vision into reality!!! </h1>


                    <form
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        ref={form} onSubmit={sendEmail}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="user_name" placeholder='Enter your name' className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder='xyz@gmail.com' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" placeholder='Enter your message' className="textarea textarea-bordered" />
                            {/* <input type="email" name="message" className="input input-bordered" /> */}
                        </div>

                        <div className="form-control mt-6">

                            <input type="submit" value="Send" className="btn btn-info text-white" />
                        </div>

                    </form>



                </div>

                <div
                    className=' pt-12 mb-24 lg:px-1 px-10'>

                    <div data-aos="flip-left">
                        <img className='w-full h-full' src="https://img.freepik.com/premium-vector/email-messaging-email-marketing-campaign_183665-8.jpg?w=740" alt="" />
                        {/* <Lottie animationData={email} loop={true} /> */}
                        <div data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className=' flex gap-8 lg:gap-16 px-5 lg:px-20'>
                            <a href="#"> <FaFacebook className='text-4xl text-info'></FaFacebook></a>
                            <a href="https://www.linkedin.com/in/moumita-rashid-bushra-5715b6279/"> <FaLinkedin className='text-4xl text-info'></FaLinkedin></a>
                            <a href="#"> <FaInstagramSquare className='text-4xl text-info'></FaInstagramSquare></a>
                            <a href="#"> <FaTwitterSquare className='text-4xl text-info'></FaTwitterSquare></a>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Contact;