package com.portfolio.repository;

import com.portfolio.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

// Spring Data JPA auto-generates all CRUD SQL queries
// No implementation needed — just extend JpaRepository
public interface UserRepository extends JpaRepository<User, Long> {
}
