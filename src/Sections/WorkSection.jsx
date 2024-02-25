import React from 'react';
import WorkHistory from "../Components/WorkHistory.jsx";
import {useData} from "../Utility/DataContext.jsx";

const WorkSection = ({ className }) => {

    const workData = useData("workData");

    if (!workData) {
        return <div>Loading...</div>;
    }

    return (
        <section className={`${className}`}>
            <WorkHistory history={workData} />
        </section>
    );
}

export default WorkSection;