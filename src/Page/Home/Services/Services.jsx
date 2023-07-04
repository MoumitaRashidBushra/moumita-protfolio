import React from 'react';
import Timeline from '../Skill/Timeline/Timeline';

const Services = () => {
    return (
        <div className='container lg:container mx-auto  px-4  lg:px-20 lg:pt-8 pb-6 ' id='services'>
            <h2 className='text-center text-4xl font-bold pt-4 pb-8 px-10'> Why Hire Me!!</h2>
            <p data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-center pb-16 px-20'>Have a look, some cloud be interesting to help achieve  <br /> your business goals or start that project you always wanted to do... Yes, that one! </p>
            <Timeline></Timeline>
            {/* <section>
                <div className='lg:container lg:mx-auto  lg:pt-10 pt-10 '>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>

                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="card w-full bg-base-100 shadow  ">
                                <figure><img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=740&t=st=1688400469~exp=1688401069~hmac=1aa313d9ebc02d02c45e8ef2ab104309375f5511f39fb7dfb85bb3801d344972" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">Front-end Development</h2>

                                    <p className='pt-3'>Passionate frontend developer dedicated to creating visually appealing and user-friendly web interfaces. Seeking opportunities to leverage skills in HTML, CSS, JavaScript.</p>


                                </div>
                            </div>
                        </div>



                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="card w-full bg-base-100 shadow">
                            <figure><img src="https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?w=740&t=st=1688400599~exp=1688401199~hmac=8e77113355ee1030b3ba7daa22816dbeed751ba2957c4e30d606394c8bc9bda2" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl"></h2>
                                <h2 className="card-title text-2xl">React Development</h2>

                                <p className='pt-3'>  I specialize in delivering high-quality React development solutions that enhance user experiences and drive business growth. </p>


                            </div>
                        </div>

                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="card w-full bg-base-100 shadow">
                            <figure><img src="https://img.freepik.com/free-vector/gradient-api-illustration_23-2149368725.jpg?w=740&t=st=1688400710~exp=1688401310~hmac=d0a6060952f6366184067de6e2889065568593f63754455c8d07c8277017ed02" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">An Expert on SASS and API</h2>

                                <p className='pt-3'>With my expertise in SASS, I can create efficient and modular stylesheets that enhance your project's maintainability and scalability. </p>


                            </div>
                        </div>









                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Services;