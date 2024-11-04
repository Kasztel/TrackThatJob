package org.example.trackthatjob.service;

import org.example.trackthatjob.model.JobApplication;
import org.example.trackthatjob.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JobApplicationService {

    private final JobApplicationRepository applicationRepository;

    @Autowired
    public JobApplicationService(JobApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public List<JobApplication> getAllApplications() {
        return applicationRepository.findAll();
    }

    public JobApplication saveApplication(JobApplication application) {
        return applicationRepository.save(application);
    }

    public void deleteApplicationById(Long id) {
        applicationRepository.deleteById(id);
    }
}