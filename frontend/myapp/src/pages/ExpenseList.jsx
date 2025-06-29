// src/pages/ExpenseList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ExpenseList = () => {
  // Dummy data — replace with API/backend call
  const [expenses, setExpenses] = useState([
    {
      id: "",
      name: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    },
  ]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/expenses/user/1"
      );
      // console.log(response.data);

      const updatedExpenses = response.data.map((i) => ({
        id: i.id || "",
        name: i.expenseName || "",
        amount: i.amount || "",
        date: i.date || "",
        category: i.category || "",
        description: i.notes || "",
      }));

      setExpenses(updatedExpenses);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📋 All Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Amount (₹)</th>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={expense.id}>
                  <td>{index + 1}</td>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>
                    <Link
                      to={`/edit/${expense.id}`}
                      className="btn btn-sm btn-warning"
                    >
                      ✏️ Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
