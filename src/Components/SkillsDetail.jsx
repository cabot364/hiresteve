import React from 'react';

const SkillsDetail = ({ skills, className }) => {
    return (
        <ul className={`grid grid-cols-1 md:grid-cols-4 gap-x-4 text-center md:text-left ${className}`}>
            {skills.map((skill) => (
                <React.Fragment key={skill}>
                    <li>
                        <p className="mb-5 pb-1 border-b-2 border-gray-700 font-bold text-lg text-gray-400">{skill.title}</p>
                        <ul className="space-y-1.5 text-gray-300 text-sm mb-5 md:mb-0">
                            {skill.skills.map((subskill) => (
                                <li key={subskill}>{subskill}</li>
                            ))}
                        </ul>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
}

export default SkillsDetail;