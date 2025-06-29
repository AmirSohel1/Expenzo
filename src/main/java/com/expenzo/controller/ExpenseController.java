package com.expenzo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expenzo.model.Expense;
import com.expenzo.service.ExpenseService;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;

    @PostMapping
    public Expense createExpense(@RequestBody Expense expense) {
        return expenseService.save(expense);
    }

    @GetMapping("/user/{userId}")
    public List<Expense> getExpensesByUser(@PathVariable Long userId) {
        return expenseService.getByUserId(userId);
    }

    @PutMapping("/{userId}/{expenseId}")
    public ResponseEntity<?> updateExpense(
            @PathVariable Long userId,
            @PathVariable Long expenseId,
            @RequestBody Expense updatedExpense) {
        try {
            Expense savedExpense = expenseService.updateExpense(userId, expenseId, updatedExpense);
            return ResponseEntity.ok(savedExpense);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get/{userId}/{expenseId}")
    public ResponseEntity<?> getExpenseByIdAndUser(
            @PathVariable Long userId,
            @PathVariable Long expenseId) {
        try {
            Expense expense = expenseService.getExpenseByIdAndUser(userId, expenseId);
            return ResponseEntity.ok(expense);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    
} 
