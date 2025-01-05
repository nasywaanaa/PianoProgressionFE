import assets from "../../assets";

const RegisterPage = () => {
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
                marginBottom: "0px" 
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
            fontSize: "16px",
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
            <span style={{ zIndex: 1 }}>Register with Google</span>
            </button>
        <p style={{ textAlign: "center", marginBottom: "10px", color: "#808191" }}>OR</p>
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
              fontSize: "16px",
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
