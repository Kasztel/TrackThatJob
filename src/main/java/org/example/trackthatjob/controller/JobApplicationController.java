package org.example.trackthatjob.controller;

import org.example.trackthatjob.model.JobApplication;
import org.example.trackthatjob.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:3000")
public class JobApplicationController {

    private final JobApplicationService applicationService;

    @Autowired
    public JobApplicationController(JobApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @GetMapping
    public List<JobApplication> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @PostMapping
    public ResponseEntity<JobApplication> createApplication(@RequestBody JobApplication application) {
        JobApplication savedApplication = applicationService.saveApplication(application);
        return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplicationById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}