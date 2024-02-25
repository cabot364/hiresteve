import React from 'react';

const WorkHistory = ({ history, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <ul className="flex flex-row flex-wrap gap-10 justify-between">
                {history.map((his) => (
                    <li key={his.id}>
                        <div className="flex flex-row">
                            <div className="">
                                <img src={his.logo} alt="Company Logo" className="rounded w-36 h-auto"/>
                            </div>
                            <div className="flex flex-col ml-4 text-left w-2/3">
                                <h3 className="text-lg font-semibold text-gray-400">{his.title}</h3>
                                <p className="text-gray-500">{his.name}</p>
                                <p className="text-gray-500">{his.startyear} - {his.endyear}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkHistory;