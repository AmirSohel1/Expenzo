import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./component/Navbar";
import Register from "./pages/Register";
import AddExpense from "./component/AddExpense";
import EditExpense from "./component/EditExpense";
import ExpenseList from "./pages/ExpenseList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route path="/expenses" element={<ExpenseList />} />
        {/* other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
