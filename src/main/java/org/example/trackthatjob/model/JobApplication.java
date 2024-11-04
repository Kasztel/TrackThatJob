package org.example.trackthatjob.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.Data;
import jakarta.validation.constraints.NotNull;


@Entity
@Data
@Table(name="job_application")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String jobName;

    @NotNull
    private String companyName;

    private String salary;

    @NotNull
    private String location;

    @NotNull
    private String dateOfApperance;

    @NotNull
    private String dateOfUpdate;

    @NotNull
    private String status;


}
