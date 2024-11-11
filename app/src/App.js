import React, { useEffect, useState } from 'react';
import JobTable from './JobTable';

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [status, setStatus] = useState('Applied');

    // Fetch data based on status filter
    const fetchJobsByStatus = (status) => {
        fetch(`http://localhost:8080/api/applications/${status}`)
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    // Fetch jobs initially and whenever the status changes
    useEffect(() => {
        fetchJobsByStatus(status);
    }, [status]);

    return (
        <div className="App">
            <h1>Job Listings</h1>
            {/* Filter buttons */}
            <div>
                <button onClick={() => handleStatusChange('Applied')}>Applied</button>
                <button onClick={() => handleStatusChange('Responded')}>Responded</button>
                <button onClick={() => handleStatusChange('Rejected')}>Rejected</button>
            </div>
            {/* Job table */}
            <JobTable jobs={jobs} />
        </div>
    );
};

export default App;
