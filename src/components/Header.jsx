import React from 'react';
import 'animate.css';


const Header = () => {
    return (
        <div id="header" className=' '>
            <section className=" w-full py-10 px-10 flex  flex-col-reverse lg:flex-row items-center justify-normal lg:justify-between ">
                {/* Content Section */}
                <div className=" max-w-screen-xl  mx-auto  p-4 lg:p-20 text-center lg:text-left space-y-2">
                    <h1 className="text-2xl lg:text-5xl text-blue-200 font-extrabold animate__animated animate__backInLeft">
                        Hi, I'm  <span className='text-amber-200'>Maskura Begum</span>
                    </h1>
                    <p className="text-lg lg:text-2xl text-white  font-medium">
                        I'm a Aspiring Software Engineer, passionate about building innovative solutions with cutting-edge technologies.
                    </p>
                    <div className='flex gap-4 py-4 items-center lg:items-start justify-center lg:justify-normal'>
                        {/* Mail Icon */}
                        <a href="https://www.facebook.com/maskura.islam.313" >
                            <div className='text-xl'><svg className='size-10' fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.1762 0.823608H2.68022C2.08296 0.823608 1.51015 1.06087 1.08782 1.4832C0.665486 1.90554 0.428223 2.47834 0.428223 3.07561V14.5716C0.428223 15.1689 0.665486 15.7417 1.08782 16.164C1.51015 16.5863 2.08296 16.8236 2.68022 16.8236H7.91222V10.9836H5.93422V8.70561H7.91222V7.02761C7.91222 6.07661 8.17522 5.33761 8.70122 4.81261C9.22722 4.28661 9.94022 4.02261 10.8412 4.02261C11.7432 4.02261 12.3272 4.05761 12.5942 4.12361V6.15161H11.3922C10.9582 6.15161 10.6622 6.24361 10.5032 6.42761C10.3452 6.61061 10.2662 6.88661 10.2662 7.25361V8.70561H12.5192L12.2192 10.9836H10.2662V16.8236H14.1762C14.7735 16.8236 15.3463 16.5863 15.7686 16.164C16.191 15.7417 16.4282 15.1689 16.4282 14.5716V3.07561C16.4282 2.47834 16.191 1.90554 15.7686 1.4832C15.3463 1.06087 14.7735 0.823608 14.1762 0.823608Z" fill="gold" /></svg>

                            </div>
                        </a>

                        {/*github*/}
                        <a href="https://github.com/MaskuraBegum">
                            <div className='text-xl'>
                                <div className='text-xl'><svg className='size-10' enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="gold" fill-rule="evenodd" /><g /><g /><g /><g /><g /><g /></svg>
                                </div>

                            

                            </div>

                        </a>

                        {/*linkind*/}
                        <a href="https://www.linkedin.com/in/maskura-begum/">
                            <div className='text-xl'><svg className='size-10' enable-background="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" /><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" fill='gold' /></g></svg>

                            </div>
                        </a>

                    </div>



                    <div className="flex gap-4 items-center lg:items-start justify-center lg:justify-normal text-center">
                        {/* Contact Me Button */}
                        <a href="mailto:maskura.begum77@gmail.com"
                            className=" flex px-2 lg:px-4 py-2 lg:py-4 bg-blue-500 text-white rounded-4xl hover:bg-blue-600 transition"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" fill-rule="evenodd"/></svg>
                            Contact Me
                        </a>

                        {/* Get Resume Button */}
                        <a 
                            href="/path-to-your-resume.pdf"
                            download="My_Resume.pdf"
                            className="flex px-2 lg:px-4 py-2 lg:py-4 bg-green-500 text-white rounded-4xl hover:bg-green-600 transition"><svg className='size-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M18,20H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z" fill="white"/><path d="M15.92,11.62A1,1,0,0,0,15,11H13V5a1,1,0,0,0-2,0v6H9a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,15.92,11.62Z" fill="white"/></svg>
                            Get Resume
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <img
                    src="https://i.ibb.co.com/bM6Db8Rs/hero-Image.png"
                    alt="Hero image of me"
                    className="animate__animated animate__flip border-amber-400 border-dashed border-b-1 border-l-1 w-40 md:w-[500px]  m-4 rounded-full"
                />

                {/* Blurring effects */}

            </section>
        </div>
    );
};

export default Header;