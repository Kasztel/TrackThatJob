package org.example.trackthatjob.model;
import jakarta.persistence.*;


@Entity
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String industry;
}
