import React from "react";

const Education = ({ education, className }) => {
    return (
        <div className={`grid grid-cols-1 gap-5 md:pl-10 ${className}`}>
            {education.map((edu) => (
                <div key={edu.id} className="flex flex-col md:flex-row justfy-center items-center mb-10 md:mb-0">
                    <div className="mb-3 md:mb-0">
                        <img src={edu.logo} alt="University Logo" className="rounded w-24 h-auto" />
                    </div>
                    <div className="flex flex-col md:ml-4 text-center md:text-left w-full md:w-2/3">
                        <h3 className="text-lg font-semibold text-gray-400">{edu.degree}</h3>
                        <p className="text-gray-500">{edu.institution}</p>
                        <p className="text-gray-500">{edu.year}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Education;