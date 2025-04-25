import SkillsSection from './SkillsSection'; // Adjust the path if the file is in a different folder
import React from "react";

const skillsData = [
  {
    title: "Web Design",
    description: "Designing user-friendly and responsive websites tailored to client needs.",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "UI/UX Principles", level: 80 },
      { name: "Responsive Layouts", level: 85 },
    ],
    icon: "<i class='fas fa-laptop-code'></i>",
  },
  {
    title: "Graphic Design",
    description: "Creating engaging visuals and branding materials across platforms.",
    skills: [
      { name: "Adobe Photoshop", level: 85 },
      { name: "Canva", level: 90 },
      { name: "Brand Identity", level: 80 },
    ],
    icon: "<i class='fas fa-paint-brush'></i>",
  },
  {
    title: "Networking",
    description: "Setting up, managing, and troubleshooting network infrastructure.",
    skills: [
      { name: "LAN/WAN Setup", level: 75 },
      { name: "IP Configuration", level: 80 },
      { name: "Network Troubleshooting", level: 70 },
    ],
    icon: "<i class='fas fa-network-wired'></i>",
  },
  {
    title: "Computer Repair",
    description: "Diagnosing and fixing hardware and software issues in PCs and laptops.",
    skills: [
      { name: "Hardware Diagnostics", level: 85 },
      { name: "Software Installation", level: 90 },
      { name: "Virus Removal", level: 80 },
    ],
    icon: "<i class='fas fa-tools'></i>",
  }
];

const SkillCard = ({ title, description, skills }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-md">
    <div className="mb-4 text-purple-500 text-2xl font-semibold">{title}</div>
    <p className="text-gray-400 mb-4">{description}</p>
    {skills.map((skill, index) => (
      <div key={index} className="mb-3">
        <label className="block text-sm">
          {skill.name} <span className="float-right">{skill.level}%</span>
        </label>
        <div className="w-full bg-gray-700 h-2 rounded">
          <div
            className="bg-purple-500 h-2 rounded"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

const SkillsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>
        <p className="text-gray-400 mb-6">
          I offer a range of professional services rooted in my expertise in web design, graphic design,
          networking, and computer repair. Whether you're looking to build a website, establish your brand,
          set up a network, or fix a computer issue, I’ve got the skills to help bring your vision to life.
        </p>
        <p className="text-gray-400">
          Leveraging a diverse skill set to create engaging digital experiences and impactful tech solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillsData.map((skillSet, index) => (
          <SkillCard
            key={index}
            title={skillSet.title}
            description={skillSet.description}
            skills={skillSet.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
