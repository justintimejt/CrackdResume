"use client"; //running on browser

import React from 'react';
import { useState } from 'react';
import { FaWandMagicSparkles } from "react-icons/fa6";


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

//validation error types
type ValidationErrors = {
    [key: string]: string;
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

    //validation states
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [touched, setTouched] = useState<{[key: string]: boolean}>({});

    //handle education section
    const [education, setEducation] = useState<Education[]>([]);

    const [skills, setSkills] = useState<Skills>([]);

    const [skillInput, setSkillInput] = useState<string> ('');

    //handle experience section
    const [experiences, setExperiences] = useState<Experience[]>([]);

    //handle projects section
    const [projects, setProjects] = useState<Project[]>([]);

    const[techInputs, setTechInputs] = useState<string[]>(['']);

    //validation verification
    const validatePersonalInfo = (field: keyof PersonalInfo, value: string): string => {
        switch (field) {
            case 'firstname':
                if (!value.trim()) return 'First name is required';
                if (value.trim().length < 2) return 'First name must be at least 2 characters';
                return '';
            
            case 'lastname':
                if (!value.trim()) return 'Last name is required';
                if (value.trim().length < 2) return 'Last name must be at least 2 characters';
                return '';
            
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
                return '';
            
            case 'phonenumber':
                if (!value.trim()) return 'Phone number is required';
                if (!/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) return 'Please enter a valid phone number';
                return '';
            
            default:
                return '';
        }
    };

    const validateEducation = (edu: Education): string[] => {
        const errors: string[] = [];
        if (!edu.school.trim()) errors.push('School is required');
        if (!edu.degree.trim()) errors.push('Degree is required');
        if (!edu.startyear) errors.push('Start date is required');
        if (!edu.endyear) errors.push('End date is required');
        if (!edu.location.trim()) errors.push('Location is required');
        
        if (edu.startyear && edu.endyear && new Date(edu.startyear) > new Date(edu.endyear)) {
            errors.push('Start date cannot be after end date');
        }
        
        return errors;
    };

    const validateExperience = (exp: Experience): string[] => {
        const errors: string[] = [];
        if (!exp.title.trim()) errors.push('Job title is required');
        if (!exp.company.trim()) errors.push('Company is required');
        if (!exp.location.trim()) errors.push('Location is required');
        if (!exp.startdate) errors.push('Start date is required');
        if (!exp.enddate) errors.push('End date is required');
        if (!exp.description.trim()) errors.push('Description is required');
        
        if (exp.startdate && exp.enddate && new Date(exp.startdate) > new Date(exp.enddate)) {
            errors.push('Start date cannot be after end date');
        }
        
        return errors;
    };

    const validateProject = (proj: Project): string[] => {
        const errors: string[] = [];
        if (!proj.projectname.trim()) errors.push('Project name is required');
        if (!proj.startdate) errors.push('Start date is required');
        if (!proj.enddate) errors.push('End date is required');
        if (!proj.description.trim()) errors.push('Description is required');
        if (proj.technologies.length === 0) errors.push('At least one technology is required');
        
        if (proj.startdate && proj.enddate && new Date(proj.startdate) > new Date(proj.enddate)) {
            errors.push('Start date cannot be after end date');
        }
        
        return errors;
    };

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};
        
        // validate personal info
        Object.keys(formData).forEach(key => {
            const field = key as keyof PersonalInfo;
            const error = validatePersonalInfo(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        // validate skills
        if (skills.length === 0) {
            newErrors.skills = 'Please add at least one skill';
        }

        // validate education
        if (education.length === 0) {
            newErrors.education = 'Please add at least one education entry';
        } else {
            education.forEach((edu, index) => {
                const eduErrors = validateEducation(edu);
                if (eduErrors.length > 0) {
                    newErrors[`education_${index}`] = eduErrors.join(', ');
                }
            });
        }

        // validate experiences (only if they exist)
        experiences.forEach((exp, index) => {
            const expErrors = validateExperience(exp);
            if (expErrors.length > 0) {
                newErrors[`experience_${index}`] = expErrors.join(', ');
            }
        });

        // validate projects (only if they exist)
        projects.forEach((proj, index) => {
            const projErrors = validateProject(proj);
            if (projErrors.length > 0) {
                newErrors[`project_${index}`] = projErrors.join(', ');
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //handle input changes and update state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; //destructure name and value of input

        //update field in formData based on input
        setFormData((prev) => ({
            ...prev, //keep previous values
            [name]: value, //update only field that is changed
        }));

        //real-time validation
        if (touched[name]) {
            const error = validatePersonalInfo(name as keyof PersonalInfo, value);
            setErrors(prev => ({
                ...prev,
                [name]: error
            }));
        }
    };

    //handle field blur
    const handleBlur = (field: string, value: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        
        if (field in formData) {
            const error = validatePersonalInfo(field as keyof PersonalInfo, value);
            setErrors(prev => ({ ...prev, [field]: error }));
        }
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

        //monitor education validation
        if (errors[`education_${index}`]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[`education_${index}`];
                return newErrors;
            });
        }
    }

    const addEducation = () => {
        setEducation([
            ...education,
            { school: '', degree: '', startyear: '', endyear: '',location: ''}
        ]);

        //clear initial education error
        if (errors.education) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.education;
                return newErrors;
            });
        }
    };

    const deleteEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index));

        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[`education_${index}`];
            return newErrors;
        });
    };

    const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSkillInput(e.target.value);
    };

    const addSkill = () => {
        const trimmed = skillInput.trim();
        if (!trimmed) return;
        setSkills([...skills, trimmed]);
        setSkillInput('');

        if (errors.skills) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.skills;
                return newErrors;
            });
        }
    }

    const deleteSkill = (index: number) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);

        if (updatedSkills.length === 0) {
            setErrors(prev => ({ ...prev, skills: 'Please add at least one skill' }));
        }
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

        if (errors[`experience_${index}`]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[`experience_${index}`];
                return newErrors;
            });
        }
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

        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[`experience_${index}`];
            return newErrors;
        });
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

        if (errors[`project_${index}`]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[`project_${index}`];
                return newErrors;
            });
        }
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

        if (errors[`project_${index}`]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[`project_${index}`];
                return newErrors;
            });
        }
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

        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[`project_${index}`];
            return newErrors;
        });
    };

    {/* Handle Submission*/}
    const [latexOutput, setLatexOutput] = useState('');
    

    //handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); //prevent default form submission

        //mark personal information fields as touched
        const personalFields = ['firstname', 'lastname', 'email', 'phonenumber'];
        setTouched(prev => {
            const newTouched = { ...prev };
            personalFields.forEach(field => {
                newTouched[field] = true;
            });
            return newTouched;
        });

        if (!validateForm()) {
            // Scroll to first error
            const firstErrorElement = document.querySelector('.border-red-500');
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

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

    const inputClass = "border border-slate-800 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-500 bg-slate-800 transition duration-200";

    //error styling
    const getInputClass = (fieldName: string, hasError: boolean = false) => {
        return `${inputClass} ${hasError ? 'border-red-500 bg-red-900/20' : ''}`;
    };

    // error message component
    const ErrorMessage = ({ message }: { message: string }) => (
        <p className="mt-1 text-sm text-red-400">{message}</p>
    );

    //render jsx
    return (
        <div>
            <div className="flex flex-col justify-center items-center py-4 px-4">
                <h1 className ="text-white text-3xl font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] mb-4">
                    Enter Your Resume Details
                </h1>
                <p className="text-white text-xl text-center">
                    Provide your personal details, education, projects, experience, and skills — we’ll do the rest.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-3xl border border-gray-800 rounded-3xl p-10 text-white bg-gradient-to-br from-gray-900 to-black">
                <h2 className="text-xl font-semibold mb-4">
                    Personal Information <span className="text-red-400">*</span>
                </h2>
                {/* Personal Info Card */}
                <div className="rounded shadow">

                {/*first name container*/}
                <div className ="mb-4">
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">
                        First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Enter your first name"
                        value={formData.firstname}
                        onChange={handleChange}

                        onBlur={(e) => handleBlur('firstname', e.target.value)}
                        className={`${getInputClass('firstname', !!errors.firstname && touched.firstname)} mb-2`}
                    />
                    {errors.firstname && touched.firstname && <ErrorMessage message={errors.firstname} />}
                </div>

                {/*last name container*/}
                <div className ="mb-4">
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-300 mb-1">
                        Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}

                        onBlur={(e) => handleBlur('lastname', e.target.value)}
                        className={`${getInputClass('lastname', !!errors.lastname && touched.lastname)} mb-2`}
                    />
                    {errors.lastname && touched.lastname && <ErrorMessage message={errors.lastname} />}
                </div>

                {/*email container*/}
                <div className= "mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}

                        onBlur={(e) => handleBlur('email', e.target.value)}
                        className={`${getInputClass('email', !!errors.email && touched.email)} `}
                    />
                    {errors.email && touched.email && <ErrorMessage message={errors.email} />}
                </div>
                    
                {/*phone number container*/}
                <div className ="mb-4">
                    <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={formData.phonenumber}
                        onChange={handleChange}

                        onBlur={(e) => handleBlur('phonenumber', e.target.value)}
                        className={`${getInputClass('phonenumber', !!errors.phonenumber && touched.phonenumber)} mb-2`}
                    />
                    {errors.phonenumber && touched.phonenumber && <ErrorMessage message={errors.phonenumber} />}
                </div>
                <div className ="mb-4">
                    <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-300 mb-1">
                        LinkedIn (optional)
                    </label>
                    <input
                        type="text"
                        name="linkedin"
                        placeholder="LinkedIn (optional)"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className={`${inputClass} mb-2`}
                    />
                </div>
                <div className ="mb-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                        Website/Github (optional)
                    </label>
                    <input
                        type="text"
                        name="website"
                        placeholder="Website (optional)"
                        value={formData.website}
                        onChange={handleChange}
                        className={`${inputClass}`}
                    />
                </div>
        </div>

                {/* Education and Skills Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Education</h2>
                        {errors.education && <ErrorMessage message={errors.education} />}

                        {education.map((edu, eduIndex) => (
                            <div key={eduIndex} className="space-y-2 p-4 rounded bg-slate-900 relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteEducation(eduIndex)
                                    }}
                                    className="absolute top-2 right-2 bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shadow"
                                >
                                    ×
                                </button>
                                {errors[`education_${eduIndex}`] && (
                                    <ErrorMessage message={errors[`education_${eduIndex}`]} />
                                )}

                                <input
                                    type="text"
                                    placeholder="School"
                                    value={edu.school}
                                    onChange={(e) => handleEducationChange(eduIndex, 'school', e.target.value)}
                                    className={getInputClass(`education_${eduIndex}`, !!errors[`education_${eduIndex}`])}
                                />
                                <input
                                    type="text"
                                    placeholder="Degree"
                                    value={edu.degree}
                                    onChange={(e) => handleEducationChange(eduIndex, 'degree', e.target.value)}
                                    className={getInputClass(`education_${eduIndex}`, !!errors[`education_${eduIndex}`])}

                                />
                                <label className="text-sm font-medium text-gray-700">
                                    Start Date 
                                </label>
                                <input
                                    type="date"
                                    placeholder=""
                                    value={edu.startyear}
                                    onChange={(e) => handleEducationChange(eduIndex, 'startyear', e.target.value)}
                                    className={getInputClass(`education_${eduIndex}`, !!errors[`education_${eduIndex}`])}

                                />
                                <label className="text-sm font-medium text-gray-700">
                                    End Date 
                                </label>
                                <input
                                    type="date"
                                    placeholder=""
                                    value={edu.endyear}
                                    onChange={(e) => handleEducationChange(eduIndex, 'endyear', e.target.value)}
                                    className={getInputClass(`education_${eduIndex}`, !!errors[`education_${eduIndex}`])}

                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={edu.location}
                                    onChange={(e) => handleEducationChange(eduIndex, 'location', e.target.value)}
                                    className={getInputClass(`education_${eduIndex}`, !!errors[`education_${eduIndex}`])}

                                />
                            </div>
                        ))}
                        <button type="button" onClick={addEducation} className="mt-2 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50">+ Add Education</button>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Skills</h2>
                        {errors.skills && <ErrorMessage message={errors.skills} />}

                    
                        {/* Skill input + add button */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Add a skill (press Enter)"
                                    value={skillInput}
                                    onChange={handleSkillInputChange}
                                    onKeyDown={handleSkillKeyDown}
                                    className={`${inputClass}`}
                                />
                                <button
                                    type="button"
                                    onClick={addSkill}
                                    className="bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50"
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
                            <div key={expIndex} className="space-y-2 p-4 rounded bg-slate-900 relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteExperience(expIndex)
                                    }}
                                    className="absolute top-2 right-2 bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shadow"
                                >
                                    ×
                                </button>
                                {errors[`experience_${expIndex}`] && (
                                    <ErrorMessage message={errors[`experience_${expIndex}`]} />
                                )}
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    value={exp.title}
                                    onChange={(e) => handleExperienceChange(expIndex, 'title', e.target.value)}
                                    className={getInputClass(`experience_${expIndex}`, !!errors[`experience_${expIndex}`])}

                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={exp.company}
                                    onChange={(e) => handleExperienceChange(expIndex, 'company', e.target.value)}
                                    className={getInputClass(`experience_${expIndex}`, !!errors[`experience_${expIndex}`])}

                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={exp.location}
                                    onChange={(e) => handleExperienceChange(expIndex, 'location', e.target.value)}
                                    className={getInputClass(`experience_${expIndex}`, !!errors[`experience_${expIndex}`])}

                                />
                                <label className="text-sm font-medium text-gray-700">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="Start Date"
                                    value={exp.startdate}
                                    onChange={(e) => handleExperienceChange(expIndex, 'startdate', e.target.value)}
                                    className={getInputClass(`experience_${expIndex}`, !!errors[`experience_${expIndex}`])}

                                />
                                <label className="text-sm font-medium text-gray-700">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="End Date"
                                    value={exp.enddate}
                                    onChange={(e) => handleExperienceChange(expIndex, 'enddate', e.target.value)}
                                    className={getInputClass(`experience_${expIndex}`, !!errors[`experience_${expIndex}`])}

                                />
                                <textarea
                                    placeholder="Description"
                                    value={exp.description}
                                    onChange={(e) => handleExperienceChange(expIndex, 'description', e.target.value)}
                                    className={getInputClass(`experience_${expIndex}`, !!errors[`experience_${expIndex}`])}

                                />
                            </div>
                        ))}
                        <button type="button" onClick={addExperience} className="mt-2 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50">+ Add Experience</button>
                    </div>

                    {/* Projects Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Projects</h2>
                        {projects.map((proj, projIndex) => (
                            <div key={projIndex} className="space-y-2 p-4 rounded bg-slate-900 relative">
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
                                {errors[`project_${projIndex}`] && (
                                    <ErrorMessage message={errors[`project_${projIndex}`]} />
                                )}
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    value={proj.projectname}
                                    onChange={(e) => handleProjectChange(projIndex, 'projectname', e.target.value)}
                                    className={getInputClass(`project_${projIndex}`, !!errors[`project_${projIndex}`])}
                                    />
                                <label className="text-sm font-medium text-gray-700">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="Start Date"
                                    value={proj.startdate}
                                    onChange={(e) => handleProjectChange(projIndex, 'startdate', e.target.value)}
                                    className={getInputClass(`project_${projIndex}`, !!errors[`project_${projIndex}`])}
                                    />
                                <label className="text-sm font-medium text-gray-700">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="End Date"
                                    value={proj.enddate}
                                    onChange={(e) => handleProjectChange(projIndex, 'enddate', e.target.value)}
                                    className={getInputClass(`project_${projIndex}`, !!errors[`project_${projIndex}`])}
                                    />
                                <textarea
                                    placeholder="Description"
                                    value={proj.description}
                                    onChange={(e) => handleProjectChange(projIndex, 'description', e.target.value)}
                                    className={getInputClass(`project_${projIndex}`, !!errors[`project_${projIndex}`])}
                                    />
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Add technology (press Enter)"
                                        value={techInputs[projIndex] || ''}
                                        onChange={(e) => handleTechInputChange(projIndex, e.target.value)}
                                        onKeyDown={(e) => handleTechKeyDown(e, projIndex)}
                                        className={getInputClass(`project_${projIndex}`, !!errors[`project${projIndex}`])}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => addTechnology(projIndex)}
                                        className="bg-white text-gray-800 px-3 py-1 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {proj.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center text-black">
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
                        <button type="button" onClick={addProject} className="mt-2 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50">+ Add Project</button>
                    </div>
                </div>


                {/*submit button*/}
                <div className='flex justify-end mt-6'>
                    <button
                        type="submit"
                        className="relative bg-blue-500 text-white px-4 py-2 rounded-xl overflow-hidden group"
                        >
        
                        <span className="absolute -inset-2 -rotate-3 transform bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg blur-[1px] opacity-80 group-hover:opacity-100 transition-opacity"></span>
                        <div className='flex items-center gap-2'>
                            <span className="relative z-10 text-md">Generate</span>
                            <FaWandMagicSparkles className='relative z-10' />
                        </div>
                    </button>
                </div>
                
            </form>   
        </div>
    );
};

export default Form;