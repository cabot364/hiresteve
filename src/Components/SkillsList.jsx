import React from "react";

const SkillsList = ({ skills, className }) => {
  return (
    <ul className={`flex flex-row space-x-5 text-lg text-gray-600 float-end ${className}`}>
      <li className="text-[#5886C4]">Steve Milligan - <a target="_blank" className="font-normal text-[#5886C4] hover:text-[#5886C4] hover:text-opacity-75" href="mailto:steve@hirestevetoday.com">steve@hirestevetoday.com</a></li>
      {skills.map((skill, index) => (
        <React.Fragment key={skill}>
          <li>{skill}</li>
          {index < skills.length - 1 && <li className="text-gray-500">|</li>} {/* Add separator except after the last item */}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default SkillsList;