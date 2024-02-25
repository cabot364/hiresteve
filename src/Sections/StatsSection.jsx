import React from 'react';
import Education from '../Components/Education';
import SkillsDetail from '../Components/SkillsDetail';
import { educationData, skillsDetails } from "../data.js";

const StatsSection = ({className}) => {
    return (
        <section className={`flex flex-row my-10 p-10 rounded ${className}`}>
            <SkillsDetail skills={skillsDetails} className="w-3/4 mr-20" />
            <Education education={educationData} className="w-auto border-l-2 border-gray-700 pl-20" />
        </section>
    );
}

export default StatsSection;
