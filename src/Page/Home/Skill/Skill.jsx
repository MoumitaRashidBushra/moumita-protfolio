import React from 'react';
import Timeline from './Timeline/Timeline';

const Skill = () => {
    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 ' id='skill'>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> My Skils</h2>
            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-6 pb-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 pt-8  mb-6 px-20'>

                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className=''>

                            <div className="card w-full border border-black">
                                {/* <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=740&t=st=1688297889~exp=1688298489~hmac=018c8b382d72ccd757ffa6993561c5ea5816092b859c835ea42d0949318c322b" alt="Shoes" className='px-10 pt-10  text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>HTML</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">80%</span>
                                        </label>
                                        <progress className="progress progress-info w-36 lg:w-48" value="80" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png?w=740&t=st=1688298423~exp=1688299023~hmac=f7aa5d7cc8ea44205410b0d4f32a31ae23eb48bda82494e699b228ac836b593e" alt="Shoes" className='px-10 pt-10  text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>CSS</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">70%</span>
                                        </label>
                                        <progress className="progress progress-info w-36 lg:w-48" value="70" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg?w=740" alt="Shoes" className='px-10 pt-10  text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>Bootstrap</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">75%</span>
                                        </label>
                                        <progress className="progress progress-info w-36 lg:w-48" value="75" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6  mb-6 px-20'>

                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="Shoes" className='px-4 pt-4 text-center rounded-full' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>Tailwind</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">80%</span>
                                        </label>
                                        <progress className="progress progress-info w-36" value="80" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ScOA4a8z---MOL1Mcpqtw0yZj0om1aUvRQS26e67ezyG2PfW6cefOsEupSdvXkVZ3H0&usqp=CAU" alt="Shoes" className='px-4 pt-4 text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>JavaScript</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">60%</span>
                                        </label>
                                        <progress className="progress progress-info w-36" value="60" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://cdn-icons-png.flaticon.com/512/1251/1251835.png?w=740&t=st=1688305156~exp=1688305756~hmac=5d28cd44535348c6084548ab8f9ec61a043d91094ae9e59d12bae2e1d58f287e" alt="Shoes" className='px-4 pt-4 text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>React JS</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">65%</span>
                                        </label>
                                        <progress className="progress progress-info w-36" value="65" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png?fit=1200%2C600&ssl=1" alt="Shoes" className='px-4 pt-4 text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>Firebase</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">70%</span>
                                        </label>
                                        <progress className="progress progress-info w-36" value="70" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6  mb-2 px-20'>

                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg?w=740" alt="Shoes" className='px-10 pt-10  text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>MongoDB</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">60%</span>
                                        </label>
                                        <progress className="progress progress-info w-36 lg:w-48" value="60" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg?w=740" alt="Shoes" className='px-10 pt-10  text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>Express Js</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">65%</span>
                                        </label>
                                        <progress className="progress progress-info w-36 lg:w-48" value="65" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <div className="card w-full border border-black ">
                                {/* <img src="https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg?w=740" alt="Shoes" className='px-10 pt-10  text-center' /> */}
                                <div className="card-body items-center text-center">
                                    <div>
                                        <h1 className='text-3xl font-bold'>Node JS</h1>
                                        <label className="label">
                                            <span className="label-text font-bold">Skill</span>
                                            <span className="label-text-alt font-bold">60%</span>
                                        </label>
                                        <progress className="progress progress-info  w-36 lg:w-48" value="60" max="100"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section>

        </div>
    );
};

export default Skill;