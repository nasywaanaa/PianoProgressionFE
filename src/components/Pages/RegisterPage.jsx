import assets from "../../assets";

const RegisterPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000", // Background warna hitam
        color: "#fff", // Warna teks putih
        padding: "0 10%",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Bagian Kiri - Logo dan Deskripsi */}
      <div style={{ width: "45%" }}>
        <div>
          <img
            src={assets.LogoPianoProgressionRemoved}
            alt="Piano Progression Logo"
            style={{ width: "250px", height: "auto", marginBottom: "20px" }}
          />
        </div>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "300",
            margin: "10px 0",
            color: "#23D693",
          }}
        >
          Piano Tracker for ABRSM
        </h3>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "1.6",
            marginTop: "10px",
            color: "#808191",
          }}
        >
          <strong>Piano Progression</strong> is a platform designed to support
          piano learning, particularly for users aiming to achieve ABRSM
          (Associated Board of the Royal Schools of Music) certification,
          assisting them on their journey to mastering the piano from Grade 1
          to Grade 8.
        </p>
        <button
          style={{
            backgroundColor: "#23D693",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Learn More
        </button>
      </div>

      {/* Bagian Kanan - Form Register */}
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
        <p
          style={{
            marginBottom: "20px",
            textAlign: "center",
            color: "#808191",
            fontSize: "14px",
          }}
        >
          Your Piano Tracker
        </p>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            border: "1px solid #23D693",
            borderRadius: "6px",
            padding: "10px 20px",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <img
            src={assets.GoogleIcon}
            alt="Google Logo"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Register With Google
        </button>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>OR</p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Name"
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
            type="text"
            placeholder="Username"
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
            placeholder="Password"
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
              color: "#808191",
              margin: "10px 0",
            }}
          >
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a
              href="/forgot-password"
              style={{
                color: "#23D693",
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
        <p
          style={{
            marginTop: "15px",
            fontSize: "14px",
            textAlign: "center",
            color: "#808191",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#23D693",
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
