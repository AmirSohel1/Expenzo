package com.expenzo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expenzo.model.Expense;
import com.expenzo.repository.ExpenseRepository;
import com.expenzo.repository.UserRepository;

@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserRepository userRepository;

    public Expense save(Expense expense) {
        return expenseRepository.save(expense);
    }

    public List<Expense> getByUserId(Long userId) {
        return expenseRepository.findByUserId(userId);
    }

    public Expense updateExpense(Long userId, Long expenseId, Expense updatedExpense) throws Exception {
        Optional<Expense> optionalExpense = expenseRepository.findById(expenseId);

        if (optionalExpense.isEmpty()) {
            throw new Exception("Expense not found with ID: " + expenseId);
        }

        Expense existingExpense = optionalExpense.get();

        if (!existingExpense.getUser().getId().equals(userId)) {
            throw new Exception("Unauthorized to update this expense.");
        }

        existingExpense.setExpenseName(updatedExpense.getExpenseName());
        existingExpense.setAmount(updatedExpense.getAmount());
        existingExpense.setDate(updatedExpense.getDate());
        existingExpense.setCategory(updatedExpense.getCategory());
        existingExpense.setNotes(updatedExpense.getNotes());

        return expenseRepository.save(existingExpense);
    }

    public Expense getExpenseByIdAndUser(Long userId, Long expenseId) throws Exception {
    Optional<Expense> optionalExpense = expenseRepository.findById(expenseId);

    if (optionalExpense.isEmpty()) {
        throw new Exception("Expense not found with ID: " + expenseId);
    }

    Expense expense = optionalExpense.get();

    if (!expense.getUser().getId().equals(userId)) {
        throw new Exception("Unauthorized access to this expense.");
    }

    return expense;
}


}