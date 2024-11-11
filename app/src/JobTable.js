import React from 'react';
import './JobTable.css';

const JobTable = ({ jobs }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Job Name</th>
                <th>Company Name</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Date of Appearance</th>
                <th>Date of Update</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {jobs.map(job => (
                <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.jobName}</td>
                    <td>{job.companyName}</td>
                    <td>{job.salary ? job.salary : 'N/A'}</td>
                    <td>{job.location}</td>
                    <td>{job.dateOfApperance}</td>
                    <td>{job.dateOfUpdate}</td>
                    <td>{job.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default JobTable;
