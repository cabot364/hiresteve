import React from 'react';
import WorkHistory from "../Components/WorkHistory.jsx";
import {useData} from "../Utility/DataContext.jsx";

const WorkSection = ({ className, workData }) => {

    return (
        <section className={`${className}`}>
            <WorkHistory history={workData} />
        </section>
    );
}

export default WorkSection;