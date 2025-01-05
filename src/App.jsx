// import LoginPage from "./components/Pages/LoginPage"; 
// import RegisterPage from "./components/Pages/RegisterPage"; 
// import LandingPage from "./components/Pages/LandingPage"; 
import ABRSMCurriculumPage from "./components/Pages/ABRSMCurriculumPage"; 

const App = () => {
  return (
    <>
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
          }
        `}
      </style>
      <div>
        {/* <LoginPage />
        <RegisterPage /> */}
        <ABRSMCurriculumPage />
      </div>
    </>
  );
};

export default App;
