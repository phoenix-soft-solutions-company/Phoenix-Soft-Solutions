import React, { useEffect, useState } from "react";
import axios from "axios";
import heading from "../constants/images/projects/heading.webp";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/project`);
      setProjects(response.data.data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen relative ">
      <header className="relative w-full h-[50vh]">
        <img src={heading} alt="header" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">PROJECTS</h1>
        </div>
      </header>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
              <img
                src={`https://drive.google.com/thumbnail?id=${project.image}&sz=w1000`}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
