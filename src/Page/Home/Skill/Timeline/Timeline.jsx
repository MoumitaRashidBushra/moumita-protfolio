import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHtml5, FaCode, FaReact, FaBootstrap, } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Timeline = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className=' mx-auto px-1   lg:px-5 lg:pt-8 pb-6 max-w-screen-xl  lg:max-w-screen-4xl w-full'>
            <VerticalTimeline lineColor='#000' >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "

                    date="2022 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaCode />}
                >

                    <h3 className="text-3xl">Front-end Development</h3>

                    <p
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        Passionate frontend developer dedicated to creating visually appealing and user-friendly web interfaces. Seeking opportunities to leverage skills in HTML, CSS, JavaScript, and UI/UX design to drive impactful digital experiences
                    </p>
                </VerticalTimelineElement >

                <VerticalTimelineElement
                    className="vertical-timeline-element--work "

                    date="2023 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaReact />}
                >

                    <h3 className="text-3xl">React Development</h3>

                    <p data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Unlock the power of ReactJS for your projects. From interactive user interfaces to seamless state management, I specialize in delivering high-quality React development solutions that enhance user experiences and drive business growth.
                    </p>
                </VerticalTimelineElement >

                <VerticalTimelineElement
                    className="vertical-timeline-element--work -pl-6"

                    date="2022 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaHtml5 />}
                >

                    <h3 className="text-3xl">An Expert on SASS and API </h3>

                    <p
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        With my expertise in SASS, I can create efficient and modular stylesheets that enhance your project's maintainability and scalability. Additionally, I have experience integrating various APIs, enabling seamless data communication and functionality.
                    </p>
                </VerticalTimelineElement >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "

                    date="2022 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaHtml5 />}
                >

                    <h3 className="text-3xl">Figma To HTML File Convert</h3>

                    <p
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        Transform your Figma designs into pixel-perfect HTML files. With expertise in HTML, CSS, and front-end frameworks like Tailwind CSS and Bootstrap, I offer professional Figma to HTML conversion services, ensuring your designs come to life with precision and responsiveness.
                    </p>
                </VerticalTimelineElement >

            </VerticalTimeline>
        </div>
    );
};

export default Timeline;