import React, { useEffect, useState } from 'react';
import JobTable from './JobTable';

const App = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/applications')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Job Listings</h1>
            <JobTable jobs={jobs} />
        </div>
    );
};

export default App;
