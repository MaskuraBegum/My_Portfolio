import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'animate.css';
AOS.init();

const About = () => {
    return (
        <div>
            <section className=" py-6 bg-gradient-to-b via-purple-900 to-gray-900 rounded-t-4xl ">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="flex flex-col gap-6 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                        {/* Profile Image */}
                        <div data-aos="zoom-in-right"  className="shadow-xl rounded-4xl overflow-hidden">
                            <img 
                                src="https://i.ibb.co.com/S4K5PNm5/mashu.jpg"
                                alt="Your Name"
                                className="w-36 lg:w-96 h-36 lg:h-96 p-4 rounded-4xl object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* About Me Paragraph */}
                        <div data-aos="zoom-in-left"  className="text-lg text-white max-w-2xl font-medium space-y-4 ">
                            <h2 className="text-4xl font-extrabold text-amber-200 mb-4">About Me</h2>
                            <p className="text-gray-200">
                                Hi! I’m Maskura, a passionate Software Engineer. I specialize in creating dynamic applications using technologies like React and Node.js. With experience in both front-end and back-end development, I enjoy solving complex problems and constantly improving my skills. When I’m not coding, I’m exploring new tech, collaborating with teams, or working on side projects. Feel free to connect!
                            </p>

                        </div>
                    </div>

                   
                </div>
            </section>
        </div>
    );
};

export default About;
