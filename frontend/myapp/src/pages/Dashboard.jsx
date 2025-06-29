// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy data — replace with actual user data from backend or context
  const totalSpent = 15420.75;
  const monthlyBudget = 20000;
  const recentExpenses = [
    { name: "Groceries", amount: 1250, date: "2025-06-12" },
    { name: "Electricity Bill", amount: 2300, date: "2025-06-10" },
    { name: "Netflix", amount: 499, date: "2025-06-08" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">👋 Welcome back to Expenzo!</h2>

      <div className="row g-4">
        {/* Summary Cards */}
        <div className="col-md-6 col-lg-4">
          <div className="card text-white bg-primary h-100">
            <div className="card-body">
              <h5 className="card-title">Total Spent</h5>
              <p className="card-text fs-4">₹ {totalSpent.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <h5 className="card-title">Monthly Budget</h5>
              <p className="card-text fs-4">
                ₹ {monthlyBudget.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Remaining Budget</h5>
              <p className="card-text fs-4">
                ₹ {(monthlyBudget - totalSpent).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-5">
        <h4 className="mb-3">🕒 Recent Expenses</h4>
        <ul className="list-group">
          {recentExpenses.map((expense, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{expense.name}</strong>{" "}
                <span className="text-muted">({expense.date})</span>
              </div>
              <span className="badge bg-secondary">₹ {expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="mt-5 d-flex gap-3 flex-wrap">
        <Link to="/add" className="btn btn-outline-primary btn-lg">
          ➕ Add Expense
        </Link>
        <Link to="/expenses" className="btn btn-outline-dark btn-lg">
          📋 View All Expenses
        </Link>
        <Link to="/report" className="btn btn-outline-success btn-lg">
          📈 View Reports
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
