// src/pages/AddExpense.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddExpense = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    expenseName: "",
    amount: "",
    date: "",
    category: "Other",
    notes: "",
    user: {
      id: 1,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { expenseName, amount, date } = formData;

    if (!expenseName || !amount || !date) {
      alert("✅ Please fill in name, amount, and date.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8081/api/expenses",
        formData,
        { withCredentials: true }
      );

      console.log("Expense submitted:", response.data);
      alert(`Expense "${formData.expenseName}" added successfully!`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting expense:", error);
      alert("❌ Failed to add expense. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="col-md-8 col-lg-6 mx-auto">
        <h2 className="mb-4 text-center">➕ Add New Expense</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm p-4 rounded"
        >
          <div className="mb-3">
            <label className="form-label">Expense Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., Lunch, Taxi, Groceries"
              name="expenseName"
              value={formData.expenseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Amount (₹)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              placeholder="e.g., 250.00"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Food</option>
              <option>Transport</option>
              <option>Utilities</option>
              <option>Entertainment</option>
              <option>Health</option>
              <option>Shopping</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Notes (optional)</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Any additional details…"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
