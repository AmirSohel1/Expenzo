// src/pages/EditExpense.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy example — replace with actual data fetching
  const [formData, setFormData] = useState({
    expenseName: "",
    amount: "",
    date: "",
    category: "Other",
    notes: "",
  });

  useEffect(() => {
    // TODO: Fetch data from backend using `id`
    const fun = async () => {
      const response = await axios.get(
        `http://localhost:8081/api/expenses/get/1/${id}`
      );
      console.log(response.data);
      const expense = {
        expenseName: response.data.expenseName,
        amount: response.data.amount,
        date: response.data.date,
        category: response.data.category,
        notes: response.data.notes,
      };
      setFormData(expense);
    };
    fun();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // TODO: Send updated data to backend using `id`
    try {
      const response = await axios.put(
        `http://localhost:8081/api/expenses/1/${id}`,
        formData
      );
      console.log(`Updated expense ${id}:`, formData);
      alert("Expense updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container my-5">
      <div className="col-md-8 col-lg-6 mx-auto">
        <h2 className="mb-4 text-center">✏️ Edit Expense</h2>

        <form
          onSubmit={handleUpdate}
          className="bg-white shadow-sm p-4 rounded"
        >
          <div className="mb-3">
            <label className="form-label">Expense Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
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
            <label className="form-label">Notes</label>
            <textarea
              className="form-control"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
            <button className="btn btn-success" type="submit">
              ✅ Update Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;
