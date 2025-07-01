import React from "react";


const SingleExperience = ({ job, company, date, responsibilities, align }) => {
  return (
    <div
      className={`bg-gray-800 rounded-lg p-6 shadow-md flex w-full sm:flex-col items-start gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } sm:flex-col`}
    >
      <div className="text-left">
        <h3 className="text-white text-2xl md:text-3xl font-extrabold capitalize leading-tight mb-1">
          {job}
        </h3>
        <p className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-1">
          {company}
        </p>
        <p className="text-gray-400 text-sm mb-4 font-medium">{date}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-[200px] hidden sm:hidden md:block"></div>
    </div>
  );
};

export default SingleExperience;
