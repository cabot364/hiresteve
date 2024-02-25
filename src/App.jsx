import { useState } from 'react'
import './App.css'
import HeroSection from './Sections/HeroSection'
import IntroSection from "./Sections/IntroSection.jsx";
import StatsSection from "./Sections/StatsSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

function App() {
    return (
        <>
            <HeroSection />
            <div className="main w-3/4 m-auto">
                <IntroSection />
                <StatsSection className="bg-gray-800" />
                <h1 className="text-4xl font-thin text-gray-400 my-10">Work History</h1>
                <WorkSection className="mb-10 rounded"/>
            </div>
        </>
    )
}

export default App
