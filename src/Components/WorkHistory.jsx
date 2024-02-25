import React from 'react';

const WorkHistory = ({ history, className }) => {
    return (
        <div className={className}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-10">
                {history.map((his) => (
                    <li key={his.id} className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="flex h-auto md:h-24 w-24 justify-center items-end md:items-start">
                            <img src={his.logo} alt="Company Logo" className="rounded max-w-24 max-h-full"/>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-4 md:text-left text-center">
                            <h3 className="text-lg font-semibold text-gray-400">{his.title}</h3>
                            <p className="text-gray-500">{his.name}</p>
                            <p className="text-gray-500">{his.startyear} - {his.endyear}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkHistory;
