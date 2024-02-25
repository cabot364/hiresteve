import React from 'react';
import Portfolio from '../Components/Portfolio.jsx';

const IntroSection = () => {
    return (
        <section className="flex flex-row mt-10">
            <div className="text-left w-full">
                <h1 className="text-3xl font-medium text-[#5886C4] mb-2">Steve who?</h1>
                <p className="leading-loose mb-10">As a dynamic digital creator with over 20 years of experience, my expertise is deeply rooted in design and spans web development, 3D animation, and programming in JavaScript and Python. My foundational skills in graphic design and 3D visualization empower me to craft engaging visuals and immersive experiences that captivate and communicate.</p>
                <Portfolio />
                <p className="leading-loose mt-10">Fuelled by a passion for transformative solutions, I thrive on the collaborative energy of teams, mentoring peers, and elevating projects beyond their initial scope. With a vision to blend my diverse design and technical skills, I am committed to driving projects from concept to completion with a relentless pursuit of excellence. My adaptability and forward-thinking approach make me an invaluable asset to any team looking to redefine the boundaries of digital creation.</p>
            </div>

        </section>
    );
}

export default IntroSection;