import { Link, useNavigate } from "react-router-dom";
import assets from "../../assets";

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${assets.BackgroundPiano})`,
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
            src={assets.LogoPianoProgressionRemoved}
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
        <button
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                border: "none", 
                borderRadius: "6px",
                padding: "10px 20px",
                width: "100%", 
                margin: "20px 0",
                cursor: "pointer",
                position: "relative",
                fontSize: "16px",
                color: "#fff", 
                textTransform: "capitalize",
                overflow: "hidden",
            }}
            >
            <span
                style={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "6px",
                padding: "1px", 
                background: "linear-gradient(40deg, #23D693, #279EFF)", 
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                zIndex: 0,
                }}
            ></span>

            <img
                src={assets.GoogleIcon}
                alt="Google Logo"
                style={{
                width: "20px",
                marginRight: "10px",
                zIndex: 1, 
                }}
            />
            <span style={{ zIndex: 1 }}>Login with Google</span>
            </button>

        <p style={{ margin: "10px 0", color: "#808191" }}>OR</p>
        <form style={{ display: "flex", flexDirection: "column" }}>
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
                "::placeholder": {
                color: "#fff", 
                opacity: 0.7, 
                },
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
                "::placeholder": {
                color: "#fff", 
                opacity: 0.7, 
                },
            }}
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
