import React from "react";
import SingleExperience from "../components/SingleExperience";


const experiences = [
  {
    job: "Data Science Trainee",
    company: "ALX Africa",
    date: "Feb 2025 - Present",
    responsibilities: [
      "Undergoing intensive training in foundational data science concepts, including data analysis with Google Sheets and Power BI.",
      "Developing strong programming skills in Python, SQL, and MySQL for data manipulation and querying.",
      "Studying core statistics and probability essential for data-driven decision-making.",
      "Gaining hands-on experience with machine learning, natural language processing (NLP), and cloud computing through applied projects.",
    ],
  },
  {
    job: "AI Research Engineer Intern",
    company: "3D Smart Factory",
    date: "Feb 2024 - Jul 2024",
    responsibilities: [
      "Developed advanced AI models for segmentation and completion of 3D scenes for autonomous vehicle systems.",
      "Collected, preprocessed, and managed large-scale 3D datasets using Python, TensorFlow, and PyTorch.",
      "Implemented neural networks optimized for 3D data understanding and reconstruction.",
      "Leveraged cloud platforms to efficiently train and evaluate deep learning models.",
      "Optimized model architectures to enhance accuracy and reduce computational overhead.",
    ],
  },
  {
    job: "Full-Stack Java Developer",
    company: "Ark-x Talent Factory (JobinTech)",
    date: "Jan 2024 - Jun 2024",
    responsibilities: [
      "Designed and developed a comprehensive e-commerce platform using microservices architecture.",
      "Built responsive, user-friendly UIs with JavaScript (ES6), TypeScript, Angular, Tailwind CSS, HTML, and CSS.",
      "Implemented RESTful APIs and business logic using Java and Spring Boot.",
      "Managed MySQL databases, performed API and unit testing to ensure backend reliability.",
      "Containerized applications using Docker and followed Agile Scrum methodology for collaborative development.",
      "Used Git and GitHub for version control and collaborative code management.",
    ],
  },
];

const ExperienceMain = () => {
  return (
    <section id="experience" className="py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold capitalize leading-[1.2] text-white mb-15 mt-15">
        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
      </h2>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto">
        {experiences.map((exp, index) => (
          <SingleExperience
            key={index}
            align={index % 2 === 0 ? "left" : "right"}
            {...exp}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceMain;
