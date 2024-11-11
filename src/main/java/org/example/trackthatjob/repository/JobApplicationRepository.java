package org.example.trackthatjob.repository;

import org.example.trackthatjob.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> getAllApplications();
    List<JobApplication> findByStatus(String status);
    JobApplication saveApplication(JobApplication application);
    void deleteApplicationById(Long id);
}