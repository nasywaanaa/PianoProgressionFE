import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import LoginPage from "./components/Pages/LoginPage.jsx";
import RegisterPage from "./components/Pages/RegisterPage.jsx";
import LandingPage from "./components/Pages/LandingPage.jsx";
import ABRSMCurriculumPage from "./components/Pages/ABRSMCurriculumPage.jsx";
import PracticePathway from "./components/Pages/PracticePathway.jsx";
// import SchedulePage from "./pages/SchedulePage";
// import TaskPage from "./pages/TaskPage";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/curriculum" element={<ABRSMCurriculumPage />} />
        <Route path="/practice" element={<PracticePathway />} />
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/tasks" element={<TaskPage />} /> */}
        {/* <Route path="/schedule" element={<SchedulePage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
