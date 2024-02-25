import React from "react";

const Education = ({ education, className }) => {
    return (
        <div className={`flex flex-col space-y-10 ${className}`}>
            {education.map((edu) => (
                <div key={edu.id} className="flex flex-row">
                    <div className="">
                        <img src={edu.logo} alt="University Logo" className="rounded w-24 h-auto" />
                    </div>
                    <div className="flex flex-col ml-4 text-left w-2/3">
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