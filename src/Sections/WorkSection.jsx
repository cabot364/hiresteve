import React from 'react';
import { workData } from "../data.js";
import WorkHistory from "../Components/WorkHistory.jsx";

const WorkSection = ({ className }) => {
    return (
        <section className={`flex flex-row ${className}`}>
            <WorkHistory history={workData} />
        </section>
    );
}

export default WorkSection;