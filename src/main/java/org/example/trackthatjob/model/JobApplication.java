package org.example.trackthatjob.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Entity
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    private String companyName;
    private String position;
    private String status;

    private LocalDate applicationDate;


    public JobApplication() {}

    public JobApplication(String companyName, String position, String status, LocalDate applicationDate) {
        this.companyName = companyName;
        this.position = position;
        this.status = status;
        this.applicationDate = applicationDate;
    }
}
