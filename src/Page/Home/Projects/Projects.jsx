import React from 'react';
import { FaHtml5, FaCode, FaReact, FaBootstrap, } from "react-icons/fa";
import './Projects.css'

const Projects = () => {
    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 ' id='projects'>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'>Recent Projects</h2>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16  lg:px-20 px-14'>

                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="card w-full bg-base-100 shadow  ">
                        <div class="image-container rounded-lg ">
                            <div class="image"></div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Sports Club </h2>

                            <p className='pt-3 pb-3'> <span className='font-bold'>Technology:</span> React | Tailwind CSS | Firebase | Express JS | MongoDB
                            </p>
                            <div className='flex gap-3 lg:gap-4'>
                                <button className="btn btn-outline btn-info  btn-sm"><a href="https://sports-club-3f91a.web.app/"> Live</a> </button>
                                <button className="btn btn-outline btn-info  btn-sm"><a href="https://github.com/MoumitaRashidBushra/sportsclubclient"> Client</a></button>
                                <button className="btn btn-outline btn-info  btn-sm"><a href="https://github.com/MoumitaRashidBushra/sportsclubserver"> Server</a></button>
                            </div>
                            <details className="collapse bg-base-200 mt-4">
                                <summary className="collapse-title text-xl font-medium text-center bg-info text-white">View Details</summary>
                                <div className="collapse-content">
                                    <p className='font-bold text-2xl '>Sports Activety Website</p>
                                    <p className='pt-3' >1.Three dashboards are Admin, Instructor, and Student Dashboard. Admin makes instructor. Admin can approve/deny/ feedback instructor classes.
                                    </p>
                                    <p className='py-3'>2.Login and register system using Firebase. Secure payment system with stripe.
                                    </p>
                                    <p className='pb-3'>3.Here I use CURD operation, Implement JWT, Verifyjwt, TanStack Query, Axios js, Private Route system, Framer-motion package
                                    </p>
                                </div>
                            </details>


                        </div>
                    </div>
                </div>



                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card w-full bg-base-100 shadow">
                    <div class="image-container1 rounded-lg ">
                        <div class="image1"></div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-2xl"></h2>
                        <h2 className="card-title text-2xl">Toy Zone</h2>

                        <p className='pt-3 pb-3'> <span className='font-bold'>Technology:</span> React | Tailwind CSS | Firebase | Express JS | MongoDB
                        </p>
                        <div className='flex gap-3 lg:gap-4'>
                            <button className="btn btn-outline btn-info  btn-sm"><a href="https://toy-zone-c7145.web.app/"> Live</a> </button>
                            <button className="btn btn-outline btn-info  btn-sm"><a href="https://github.com/MoumitaRashidBushra/toyzoneclient"> Client</a></button>
                            <button className="btn btn-outline btn-info  btn-sm"><a href="https://github.com/MoumitaRashidBushra/toyzoneservernew"> Server</a></button>
                        </div>
                        <details className="collapse bg-base-200 mt-4">
                            <summary className="collapse-title text-xl font-medium text-center bg-info text-white">View Details</summary>
                            <div className="collapse-content">
                                <p className='font-bold text-2xl '>Kids Car Toy Website </p>
                                <p className='pt-3' >1.Toy category implements by react tab that provides categories of toys, searching facilities by toy name on all toys page, and login and register system using Firebase.
                                </p>
                                <p className='py-3'>2.Authorises user can Add A Toy, Update a toy, Delete a toy, toy sort by price.
                                </p>
                                <p className='pb-3'>3.Responsive design for desktop and mobile, optimizing user experience across devices.
                                </p>
                            </div>
                        </details>


                    </div>
                </div>

                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card w-full bg-base-100 shadow">
                    <div class="image-container2 rounded-lg ">
                        <div class="image2  "></div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Testy Food Hunter</h2>

                        <p className='pt-3'> <span className='font-bold'>Technology:</span> React | Tailwind CSS | Firebase | Express JS
                        </p>
                        <div className='flex gap-3 lg:gap-4'>
                            <button className="btn btn-outline btn-info  btn-sm"><a href="https://testy-food-hunter.web.app/"> Live</a> </button>
                            <button className="btn btn-outline btn-info  btn-sm"><a href="https://github.com/MoumitaRashidBushra/testyfoodclient"> Client</a></button>
                            <button className="btn btn-outline btn-info  btn-sm"><a href="https://github.com/MoumitaRashidBushra/testyfoodserver"> Server</a></button>
                        </div>
                        <details className="collapse bg-base-200 mt-4">
                            <summary className="collapse-title text-xl font-medium text-center bg-info text-white">View Details</summary>
                            <div className="collapse-content">
                                <p className='font-bold text-2xl '>Indian Chefs Special Recipes</p>
                                <p className='pt-3' >1.User registration and login via Firebase authentication, with additional log in options using Google and GitHub.

                                </p>
                                <p className='py-3'>2.Only logged-in users can view Chef details information and top special recipes.Private router access to control login status. Download a pdf on the Blog page.

                                </p>
                                <p className='pb-3'>3.Responsive design for desktop and mobile, optimizing user experience.
                                </p>
                            </div>
                        </details>


                    </div>
                </div>









            </div>


        </div>
    );
};

export default Projects;