import React from 'react';
import Portfolio from '../Components/Portfolio.jsx';
import { useData } from '../Utility/DataContext';

const IntroSection = ({introData, portfolioItems}) => {

    return (
        <section className="flex flex-row mt-10">
            <div className="text-left w-full">
                <h1 className="text-3xl font-medium text-[#5886C4] mb-2">Steve who?</h1>
                <p className="leading-loose mb-5">{introData.find(item => item.id === 1)?.text}</p>
                <p className="leading-loose mb-10">{introData.find(item => item.id === 2)?.text}</p>
                <Portfolio portfolioItems={portfolioItems}/>
            </div>

        </section>
    );
}

export default IntroSection;