import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import assets from "../../assets";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Kirim data ke backend menggunakan Axios
      const response = await axios.post("https://api.pianoprogression.web.id/register", formData);

      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login"); // Redirect ke halaman login setelah registrasi berhasil
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        padding: "0 10%",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ width: "45%" }}>
        <div>
          <img
            src={assets.LogoPianoProgressionRemoved}
            alt="Piano Progression Logo"
            style={{
              width: "408px",
              height: "auto",
              marginBottom: "0px",
            }}
          />
        </div>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "300",
            margin: "10px 0",
            color: "#FFF",
            fontStyle: "italic",
            paddingBottom: "5px",
            borderBottom: "3px solid #FFF",
            display: "inline-block",
          }}
        >
          Piano Tracker for ABRSM
        </h3>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1.6",
            marginTop: "20px",
            color: "#FFF",
          }}
        >
          <strong>Piano Progression</strong> is a platform designed to support
          piano learning, particularly for users aiming to achieve ABRSM certification.
        </p>
      </div>

      <div
        style={{
          width: "45%",
          backgroundColor: "rgba(20, 20, 20, 0.9)",
          borderRadius: "6px",
          padding: "30px 40px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2
          style={{
            marginBottom: "10px",
            fontSize: "28px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Register Your Account
        </h2>
        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              borderRadius: "6px",
              outline: "none",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              borderRadius: "6px",
              outline: "none",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              borderRadius: "6px",
              outline: "none",
            }}
          />
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
            Register
          </button>
        </form>
        <p
          style={{
            marginTop: "15px",
            fontSize: "16px",
            textAlign: "center",
            color: "#808191",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#FFF",
              textDecoration: "none",
            }}
          >
            Login now
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
