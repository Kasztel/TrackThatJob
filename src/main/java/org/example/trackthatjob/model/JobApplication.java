package org.example.trackthatjob.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.Data;


@Entity
@Data
@Table(name="job_application")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String jobName;
    private String companyName;
    private String salary;
    private String location;
    private String dateOfApperance;
    private String dateOfUpdate;
    private String status;


}
