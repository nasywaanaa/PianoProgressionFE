import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import BackgroundPiano from "../../assets/BackgroundPiano.png";
import LogoPianoProgressionRemoved from "../../assets/LogoPianoProgressionRemoved.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setErrorMessage(""); // Reset error message

    try {
      // Kirim permintaan login ke server
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      const { token, isAdmin } = response.data.data;

      // Simpan token dan admin status di localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", isAdmin);

      // Arahkan ke halaman berdasarkan status admin
      if (isAdmin) {
        navigate("/admin-dashboard");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundPiano})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "rgba(20, 20, 20, 0.9)",
          borderRadius: "6px",
          padding: "30px 40px",
          maxWidth: "500px",
          width: "90%",
          textAlign: "center",
          zIndex: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <img
            src={LogoPianoProgressionRemoved}
            alt="Piano Progression Logo"
            style={{
              width: "198px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h2 style={{ margin: "10px 0", fontSize: "36px", color: "#FFFF", fontWeight: "semi-bold" }}>
          Login to Your Account
        </h2>
        <p style={{ margin: "10px 0", color: "#808191" }}>Your Piano Tracker</p>

        {errorMessage && (
          <p style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</p>
        )}

        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              borderRadius: "6px",
              outline: "none",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              borderRadius: "6px",
              outline: "none",
            }}
            required
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a
              href="/forgot-password"
              style={{
                color: "#808191",
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#23D693",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Login to Your Account
          </button>
        </form>
        <p style={{ marginTop: "15px", fontSize: "16px", color: "#555" }}>
          Don&apos;t have an account yet?{" "}
          <a
            href="/register"
            style={{
              color: "#FFF",
              textDecoration: "none",
            }}
          >
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
