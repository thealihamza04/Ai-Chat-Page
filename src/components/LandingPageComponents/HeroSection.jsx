import React from 'react';
import { Button } from '../ui/button';

const HeroSection = () => {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 space-y-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div>
                            <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight ">
                                Build Modern Web Apps
                                <span className='animate-pulse'>
                                    {" "}    with Confidence
                                </span>
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                                Empower your business with scalable, high-performance web solutions built using the latest technologies. From idea to deployment — we’ve got you covered.
                            </p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button> Get Started</Button>
                            <Button variant={"secondary"}> Learn More</Button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://plus.unsplash.com/premium_photo-1720610706902-f92d98fb8b35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVybiUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
