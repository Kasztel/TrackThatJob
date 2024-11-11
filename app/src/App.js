import React, { useEffect, useState } from 'react';
import JobTable from './JobTable';
import AddApplicationForm from "./AddApplicationForm";
import './App.css';

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [activeFilters, setActiveFilters] = useState({
        Applied: false,
        Responded: false,
        Rejected: false,
    });

    // Fetch data based on status filter
    const fetchJobs = (status = '') => {
        const url = status
            ? `http://localhost:8080/api/applications/${status}` // If there's a status, apply filter
            : `http://localhost:8080/api/applications`; // Otherwise, fetch all jobs
        fetch(url)
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error('Error fetching data:', error));
    };

    const handleStatusChange = (filterStatus) => {
        // Toggle the button's active state
        const newActiveFilters = { ...activeFilters, [filterStatus]: !activeFilters[filterStatus] };
        setActiveFilters(newActiveFilters);

        // If the filter is already active, reset to show all applications
        if (newActiveFilters[filterStatus]) {
            fetchJobs(filterStatus); // Apply the filter
        } else {
            fetchJobs(); // Show all jobs
        }
    };

    // Function to handle adding a new application
    const handleAddApplication = (applicationData) => {
        fetch('http://localhost:8080/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        })
            .then((response) => response.json())
            .then((newJob) => {
                setJobs((prevJobs) => [...prevJobs, newJob]); // Add new job to the list
            })
            .catch((error) => console.error('Error adding application:', error));
    };

    useEffect(() => {
        fetchJobs(); // Fetch all jobs initially
    }, []);
    return (
        <div className="App">
            <h1>Job Listings</h1>

            {/* Filter buttons */}
            <div>
                <button
                    className={activeFilters.Applied ? 'active' : ''}
                    onClick={() => handleStatusChange('Applied')}
                >
                    Applied
                </button>
                <button
                    className={activeFilters.Responded ? 'active' : ''}
                    onClick={() => handleStatusChange('Responded')}
                >
                    Responded
                </button>
                <button
                    className={activeFilters.Rejected ? 'active' : ''}
                    onClick={() => handleStatusChange('Rejected')}
                >
                    Rejected
                </button>
            </div>

            {/* Add Application Form */}
            <AddApplicationForm onAddApplication={handleAddApplication} />

            {/* Job Table */}
            <JobTable jobs={jobs} />
        </div>
    );
};

export default App;
