import React from 'react';
import Education from '../Components/Education';
import SkillsDetail from '../Components/SkillsDetail';

const StatsSection = ({className, educationData, skillsDetails}) => {
    return (
        <section className={`grid grid-cols-1 md:grid-cols-2 my-10 p-10 rounded ${className}`}>
            <SkillsDetail skills={skillsDetails} className="mb-10 md:mb-0 md:mr-10" />
            <Education education={educationData} className="md:border-l-2 border-gray-700" />
        </section>
    );
}

export default StatsSection;
