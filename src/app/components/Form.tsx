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

type Skills = string[];

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

type Props = {
    selectedTemplate: {
        name: string;
        image: string;
    };
    onComplete: (latex: string) => Promise<void>;
    onStartLoading: () => void;
};  

const Form = ({ selectedTemplate, onComplete, onStartLoading}: Props) => {    
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

    //handle education section
    const [education, setEducation] = useState<Education[]>([
        { school: '', degree: '', startyear: '', endyear: '',location: ''}
    ]);

    const [skills, setSkills] = useState<Skills>([]);

    const [skillInput, setSkillInput] = useState<string> ('');

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


    //handle change in education block
    const handleEducationChange = (
        index: number,
        field: keyof Education,
        value: string
    ) => {
        const updated = [...education];
        updated[index][field] = value;
        setEducation(updated);
    }

    const addEducation = () => {
        setEducation([
            ...education,
            { school: '', degree: '', startyear: '', endyear: '',location: ''}
        ]);
    };

    const deleteEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSkillInput(e.target.value);
    };

    const addSkill = () => {
        const trimmed = skillInput.trim();
        if (!trimmed) return;
        setSkills([...skills, trimmed]);
        setSkillInput('');
    }

    const deleteSkill = (index: number) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    };

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
    const [latexOutput, setLatexOutput] = useState('');
    

    //handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); //prevent default form submission

        onStartLoading();

        const completeForm = {
            ...formData, //unpack form data
            education,
            skills,
            experiences,
            projects,
            template: selectedTemplate.name,
        };


        //send POST request to backend
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    template: selectedTemplate.name,
                    formData: completeForm,
                })
            });

        
            const data = await response.json();
            console.log(data.latex);

            onComplete(data.latex);

        } catch (error) {
            console.error("Error sending data:", error);
        }

    };

    const inputClass = "border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400";

    //render jsx
    return (
        <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-3xl border rounded-xl p-10 bg-gray-200">

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
                    className={`${inputClass} mb-2`}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={`${inputClass} mb-2`}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClass} mb-2`}
                />
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    className={`${inputClass} mb-2`}
                />
                <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn (optional)"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className={`${inputClass} mb-2`}
                />
                <input
                    type="text"
                    name="website"
                    placeholder="Website (optional)"
                    value={formData.website}
                    onChange={handleChange}
                    className={`${inputClass}`}
                />
            </div>

            {/* Education and Skills Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Education</h2>
                    {education.map((edu, eduIndex) => (
                        <div key={eduIndex} className="space-y-2 border p-4 rounded bg-gray-50 relative">
                            <button
                                type="button"
                                onClick={() => {
                                    deleteEducation(eduIndex)
                                }}
                                className="absolute top-2 right-2 bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shadow"
                            >
                                ×
                            </button>
                            <input
                                type="text"
                                placeholder="School"
                                value={edu.school}
                                onChange={(e) => handleEducationChange(eduIndex, 'school', e.target.value)}
                                className={inputClass}
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(eduIndex, 'degree', e.target.value)}
                                className={inputClass}
                            />
                            <label className="text-sm font-medium text-gray-700">
                                Start Year
                            </label>
                            <input
                                type="date"
                                placeholder=""
                                value={edu.startyear}
                                onChange={(e) => handleEducationChange(eduIndex, 'startyear', e.target.value)}
                                className={inputClass}
                            />
                            <label className="text-sm font-medium text-gray-700">
                                End Year
                            </label>
                            <input
                                type="date"
                                placeholder=""
                                value={edu.endyear}
                                onChange={(e) => handleEducationChange(eduIndex, 'endyear', e.target.value)}
                                className={inputClass}
                            />
                            <textarea
                                placeholder="Location"
                                value={edu.location}
                                onChange={(e) => handleEducationChange(eduIndex, 'location', e.target.value)}
                                className={inputClass}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addEducation} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">+ Add Education</button>
                </div>

                {/* Skills Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Skills</h2>
                
                    {/* Skill input + add button */}
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Add a skill (press Enter)"
                                value={skillInput}
                                onChange={handleSkillInputChange}
                                onKeyDown={handleSkillKeyDown}
                                className="border p-2 w-full appearance-none bg-white"
                            />
                            <button
                                type="button"
                                onClick={addSkill}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Add
                            </button>
                        </div>

                    {/* List of added skills */}
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full flex items-center gap-2"
                            >
                                {skill}
                            <button
                                type="button"
                                onClick={() => deleteSkill(index)}
                                className="text-red-500 font-bold hover:text-red-700"
                            >
                                ×
                            </button>
                            </span>
                        ))}
                    </div>
                </div>
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
                                    deleteExperience(expIndex)
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
                                className={inputClass}
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) => handleExperienceChange(expIndex, 'company', e.target.value)}
                                className={inputClass}
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={exp.location}
                                onChange={(e) => handleExperienceChange(expIndex, 'location', e.target.value)}
                                className={inputClass}
                            />
                            <label className="text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                placeholder="Start Date"
                                value={exp.startdate}
                                onChange={(e) => handleExperienceChange(expIndex, 'startdate', e.target.value)}
                                className={inputClass}
                            />
                            <label className="text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                placeholder="End Date"
                                value={exp.enddate}
                                onChange={(e) => handleExperienceChange(expIndex, 'enddate', e.target.value)}
                                className={inputClass}
                            />
                            <textarea
                                placeholder="Description"
                                value={exp.description}
                                onChange={(e) => handleExperienceChange(expIndex, 'description', e.target.value)}
                                className={inputClass}
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
                                    deleteProject(projIndex)
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
                                className={inputClass}
                            />
                            <label className="text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                placeholder="Start Date"
                                value={proj.startdate}
                                onChange={(e) => handleProjectChange(projIndex, 'startdate', e.target.value)}
                                className={inputClass}
                            />
                            <label className="text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                placeholder="End Date"
                                value={proj.enddate}
                                onChange={(e) => handleProjectChange(projIndex, 'enddate', e.target.value)}
                                className={inputClass}
                            />
                            <textarea
                                placeholder="Description"
                                value={proj.description}
                                onChange={(e) => handleProjectChange(projIndex, 'description', e.target.value)}
                                className={inputClass}
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Add Technology (press Enter)"
                                    value={techInputs[projIndex]}
                                    onChange={(e) => handleTechInputChange(projIndex, e.target.value)}
                                    onKeyDown={(e) => handleTechKeyDown(e, projIndex)}
                                    className={inputClass}
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