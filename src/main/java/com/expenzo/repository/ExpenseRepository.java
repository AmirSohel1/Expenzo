package com.expenzo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expenzo.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByUserId(Long userId);
    Optional<Expense> findByIdAndUserId(Long expenseId, Long userId);
}