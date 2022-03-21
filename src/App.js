import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
import EmployeeProfile from "./Components/Pages/EmployeeProfile"
import Leave from './Components/Pages/Leave';
import Documents from './Components/Pages/Documents';
import Payslips from './Components/Pages/Payslips';
import Queries from './Components/Pages/Queries';
import Expenses from './Components/Pages/Expenses';
import PoshQueries from './Components/Pages/Posh-queries';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<EmployeeProfile />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/payslips" element={<Payslips />} />
      <Route path="/queries" element={<Queries />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/poshqueries" element={<PoshQueries />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
