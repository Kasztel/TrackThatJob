import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/api/applications')
            .then(response => response.json())
            .then(data => {
                setApplications(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching applications:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-intro">
                    <h2>Job Applications</h2>
                    {applications.map(application => (
                        <div key={application.id} className="application-card">
                            <h3>{application.jobTitle}</h3>
                            <p>Company: {application.companyName}</p>
                            <p>Status: {application.status}</p>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
};

export default App;
