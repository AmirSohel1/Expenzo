// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Welcome to 💰 Expenzo</h1>
        <p className="lead text-muted">
          Your smart solution for managing and tracking your personal expenses.
        </p>
        <hr />
      </div>

      <section className="my-5">
        <h2 className="mb-3">📊 What is an Expense Tracker?</h2>
        <p>
          An expense tracker helps you log your daily, weekly, or monthly
          expenses to better understand your spending habits. With{" "}
          <strong>Expenzo</strong>, you can visualize where your money goes, set
          budgets, and plan ahead!
        </p>
      </section>

      <section className="my-5">
        <h2 className="mb-3">🚀 Features of Expenzo</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            ✅ Add, edit, and delete your expenses with ease
          </li>
          <li className="list-group-item">
            📅 View expenses by category or date range
          </li>
          <li className="list-group-item">
            📈 Visualize spending patterns through charts and reports
          </li>
          <li className="list-group-item">
            💾 Save your data securely with user authentication
          </li>
          <li className="list-group-item">
            📤 Export data for backup or sharing
          </li>
        </ul>
      </section>

      <section className="my-5">
        <h2 className="mb-3">📌 How to Use Expenzo</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            Sign up or log in with your secure credentials
          </li>
          <li className="list-group-item">
            Navigate to the Dashboard to see an overview of your finances
          </li>
          <li className="list-group-item">
            Use the "Add Expense" tab to log new transactions
          </li>
          <li className="list-group-item">
            Track and analyze expenses from the Reports section
          </li>
        </ol>
      </section>

      <div className="text-center mt-5">
        <Link to="/login" className="btn btn-primary btn-lg">
          Get Started / Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
