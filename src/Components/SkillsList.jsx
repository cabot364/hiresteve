import React from "react";

const SkillsList = ({ skills, className }) => {
    return (
            <div className={"mt-5 flex flex-col md:flex-row md:gap-5 justify-center items-center"}>
            <p className="text-[#5886C4]">Steve Milligan - <a target="_blank"
                                                              className="font-normal text-[#5886C4] hover:text-[#5886C4] hover:text-opacity-75"
                                                              href="mailto:steve@hirestevetoday.com">steve@hirestevetoday.com</a>
            </p>

            <ul className={`flex flex-row space-x-3 md:space-x-5 text-lg text-gray-600 ${className}`}>
                {skills.map((skill, index) => (
                    <React.Fragment key={skill}>
                        <li>{skill}</li>
                        {index < skills.length - 1 && <li className="text-gray-500">|</li>} {/* Add separator except after the last item */}
                    </React.Fragment>
                ))}
            </ul>
                </div>
    );
};

export default SkillsList;