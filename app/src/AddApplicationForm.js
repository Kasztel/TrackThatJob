import React, { useState } from 'react';

const AddApplicationForm = ({ onAddApplication }) => {
    const [formData, setFormData] = useState({
        jobName: '',
        companyName: '',
        salary: '',
        location: '',
        status: 'Applied', // Default status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddApplication(formData); // Pass data to the parent component
        setFormData({
            jobName: '',
            companyName: '',
            salary: '',
            location: '',
            status: 'Applied',
        }); // Clear the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="jobName"
                placeholder="Job Name"
                value={formData.jobName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="Applied">Applied</option>
                <option value="Responded">Responded</option>
                <option value="Rejected">Rejected</option>
            </select>
            <button type="submit">Add Application</button>
        </form>
    );
};

export default AddApplicationForm;
