import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Import pages
import LoginPage from "./components/Pages/LoginPage.jsx";
import RegisterPage from "./components/Pages/RegisterPage.jsx";
import LandingPage from "./components/Pages/LandingPage.jsx";
import ABRSMCurriculumPage from "./components/Pages/ABRSMCurriculumPage.jsx";
import PracticePathway from "./components/Pages/PracticePathway.jsx";
import TaskManager from "./components/Pages/TaskManager.jsx";

// Higher-order component for route protection
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #000; /* Default background color */
            color: #FFF; /* Default text color */
          }
        `}
      </style>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/task" element={<TaskManager />} />

        

        {/* Protected Routes */}
        <Route
          path="/landing"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/curriculum"
          element={
            <ProtectedRoute>
              <ABRSMCurriculumPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <PracticePathway />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
