"use client"; //running on browser

import React from 'react';
import { useState } from 'react';

//personal information
type PersonalInfo = {
    firstname: string;
    lastname: string
    email: string;
    phonenumber: string;
    linkedin: string;
    website: string;
};

//education
type Education = {
    school: string;
    degree: string;
    startyear: string;
    endyear:string;
    location: string;
}

type Skills = {
    description: string;
}

//experience
type Experience = {
    title: string;
    company: string;
    location: string;
    startdate: string;
    enddate: string;
    description: string;
}

//projects
type Project = {
    projectname: string;
    technologies: string[];
    startdate: string;
    enddate: string;
    description: string;
}

const Form = () => {

    //useState hook to track form field values
    const [formData, setFormData] = useState<PersonalInfo>({
        firstname: '', //initial value
        lastname: '',
        email: '',
        phonenumber:'',
        linkedin: '',
        website: ''
    });

    {/* Handle Form Changes*/}

    //handle experience section
    const [experiences, setExperiences] = useState<Experience[]>([
        { title: '', company: '', location: '', startdate: '', enddate: '', description: '' }
    ]);

    //handle projects section
    const [projects, setProjects] = useState<Project[]>([
        { projectname: '', technologies: [], startdate: '', enddate: '', description: '' }
    ]);

    const[techInputs, setTechInputs] = useState<string[]>(['']);

    //handle input changes and update state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; //destructure name and value of input

        //update field in formData based on input
        setFormData((prev) => ({
            ...prev, //keep previous values
            [name]: value, //update only field that is changed
        }));
    };

    {/*handle all experience actions*/}

    //handle changes in experience blocks
    const handleExperienceChange = (
        index: number,
        field: keyof Experience,
        value: string
    ) => {
        const updated = [...experiences];
        updated[index][field] = value; //modify specific field
        setExperiences(updated); //set new changes
    }

    //add new experience entry
    const addExperience = () => {
        setExperiences([
            ...experiences,
            { title: '', company: '', location: '', startdate: '', enddate: '', description: '' }
        ]);
    };

    //delete experience entry
    const deleteExperience = (index: number) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    }

    const handleProjectChange = (
        index: number,
        field: keyof Project,
        value: string
    ) => {
        const updated = [...projects];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setProjects(updated);
    };

    const handleTechInputChange = (index: number, value: string) => {
        const updated = [...techInputs];
        updated[index] = value;
        setTechInputs(updated);
    };

    const addTechnology = (index: number) => {
        const tech = techInputs[index].trim();
        if (!tech) return;
        const updatedProjects = [...projects];
        updatedProjects[index].technologies.push(tech);
        setProjects(updatedProjects);
        const updatedTechInputs = [...techInputs];
        updatedTechInputs[index] = '';
        setTechInputs(updatedTechInputs);
    };

    const deleteTechnology = (projectIndex: number, techIndex: number) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].technologies = updatedProjects[projectIndex].technologies.filter((_, i) => i !== techIndex);
        setProjects(updatedProjects);
    };

    const handleTechKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTechnology(index);
        }
    };

    const addProject = () => {
        setProjects([
            ...projects,
            { projectname: '', technologies: [], startdate: '', enddate: '', description: '' }
        ]);
        setTechInputs([...techInputs, '']);
    };

    const deleteProject = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index));
        setTechInputs(techInputs.filter((_, i) => i !== index));
    };

    {/* Handle Submission*/}

    //handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //prevent default form submission
        const completeForm = {
            ...formData, //unpack form data
            experiences,
            projects
        };

        //debug: log submitted form data
        console.log("data", formData, experiences, projects); 

        //TODO: SEND FORM DATA TO BACKEND/GEMINI API
    };

    //render jsx
    return (
        <form onSubmit={handleSubmit} className="space-y-4">

        {/* Personal Info Card */}
    <div className="border p-6 rounded bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">
            Personal Information
        </h2>
        <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
        />
        <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
        />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
        />
        <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
        />
        <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            value={formData.linkedin}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
        />
        <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 w-full"
        />
    </div>

            {/* Experience and Projects Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Experience Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Experience</h2>
                    {experiences.map((exp, expIndex) => (
                        <div key={expIndex} className="space-y-2 border p-4 rounded bg-gray-50 relative">
                            <button
                                type="button"
                                onClick={() => {
                                    const updated = experiences.filter((_, i) => i !== expIndex);
                                    setExperiences(updated);
                                }}
                                className="absolute top-2 right-2 bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shadow"
                            >
                                ×
                            </button>
                            <input
                                type="text"
                                placeholder="Job Title"
                                value={exp.title}
                                onChange={(e) => handleExperienceChange(expIndex, 'title', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) => handleExperienceChange(expIndex, 'company', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={exp.location}
                                onChange={(e) => handleExperienceChange(expIndex, 'location', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <label className="text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                placeholder="Start Date"
                                value={exp.startdate}
                                onChange={(e) => handleExperienceChange(expIndex, 'startdate', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <label className="text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                placeholder="End Date"
                                value={exp.enddate}
                                onChange={(e) => handleExperienceChange(expIndex, 'enddate', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <textarea
                                placeholder="Description"
                                value={exp.description}
                                onChange={(e) => handleExperienceChange(expIndex, 'description', e.target.value)}
                                className="border p-2 w-full"
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addExperience} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">+ Add Experience</button>
                </div>

                {/* Projects Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Projects</h2>
                    {projects.map((proj, projIndex) => (
                        <div key={projIndex} className="space-y-2 border p-4 rounded bg-gray-50 relative">
                            <button
                                type="button"
                                onClick={() => {
                                    const updated = projects.filter((_, i) => i !== projIndex);
                                    setProjects(updated);
                                    setTechInputs((prev) => prev.filter((_, i) => i !== projIndex));
                                }}
                                className="absolute top-2 right-2 bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shadow"
                            >
                                ×
                            </button>
                            <input
                                type="text"
                                placeholder="Project Name"
                                value={proj.projectname}
                                onChange={(e) => handleProjectChange(projIndex, 'projectname', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <label className="text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                placeholder="Start Date"
                                value={proj.startdate}
                                onChange={(e) => handleProjectChange(projIndex, 'startdate', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <label className="text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                placeholder="End Date"
                                value={proj.enddate}
                                onChange={(e) => handleProjectChange(projIndex, 'enddate', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <textarea
                                placeholder="Description"
                                value={proj.description}
                                onChange={(e) => handleProjectChange(projIndex, 'description', e.target.value)}
                                className="border p-2 w-full"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Add Technology"
                                    value={techInputs[projIndex]}
                                    onChange={(e) => handleTechInputChange(projIndex, e.target.value)}
                                    onKeyDown={(e) => handleTechKeyDown(e, projIndex)}
                                    className="border p-2 flex-1"
                                />
                                <button
                                    type="button"
                                    onClick={() => addTechnology(projIndex)}
                                    className="bg-green-500 text-white px-3 py-2 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {proj.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
                                        {tech}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const updated = [...projects];
                                                updated[projIndex].technologies = updated[projIndex].technologies.filter((_, i) => i !== techIndex);
                                                setProjects(updated);
                                            }}
                                            className="ml-2 bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center shadow"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addProject} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">+ Add Project</button>
                </div>
            </div>



            {/*submit button*/}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            Submit
            </button>


        </form>   
    );
};

export default Form;