import { useState } from "react";
import LogoPianoProgressionRemoved from "../../assets/LogoPianoProgressionRemoved.png";

const PracticePathway = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    writer: "",
    deadline: "",
    grade: "",
    additionalMaterial: "",
    notes: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Masukkan account ID dan token dari sesi login
    const accountId = "YOUR_ACCOUNT_ID"; // Ganti dengan ID akun pengguna yang terlogin
    const token = "YOUR_BEARER_TOKEN"; // Ganti dengan token otorisasi pengguna

    try {
      const response = await fetch(`https://api.pianoprogression.web.id/tasks/${accountId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Task added successfully!");
        setFormData({
          title: "",
          writer: "",
          deadline: "",
          grade: "",
          additionalMaterial: "",
          notes: "",
        });
        setShowPopup(false);
      } else {
        setErrorMessage(data.message || "Failed to add task.");
      }
    } catch (error) {
      setErrorMessage("Network error: Unable to add task.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#fff", padding: "20px" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <img src={LogoPianoProgressionRemoved} alt="Piano Progression Logo" style={{ width: "120px" }} />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "20px",
          }}
        >
          {["ABRSM Navigator", "Practice Pathway", "Progress Visionary", "Interactive Essentials"].map(
            (item) => (
              <li key={item}>
                <a href="#" style={{ color: "#808191", textDecoration: "none", fontSize: "16px" }}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Add Task Button */}
      <div style={{ marginTop: "100px", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={togglePopup}
            style={{
              backgroundColor: "#23D693",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Pop-Up */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "10px",
              width: "500px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              color: "#fff",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Task</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Writer</label>
                <input
                  type="text"
                  name="writer"
                  value={formData.writer}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Deadline</label>
                <input
                  type="datetime-local"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Grade</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                >
                  <option value="" disabled>
                    Choose Grade
                  </option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 1">Grade 4</option>
                  <option value="Grade 2">Grade 5</option>
                  <option value="Grade 3">Grade 6</option>
                  <option value="Grade 2">Grade 7</option>
                  <option value="Grade 3">Grade 8</option>
                </select>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Additional Material</label>
                <input
                  type="text"
                  name="additionalMaterial"
                  value={formData.additionalMaterial}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    resize: "none",
                  }}
                ></textarea>
              </div>
              {errorMessage && (
                <p style={{ color: "red", textAlign: "center", marginBottom: "15px" }}>{errorMessage}</p>
              )}
              {successMessage && (
                <p style={{ color: "green", textAlign: "center", marginBottom: "15px" }}>{successMessage}</p>
              )}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  type="button"
                  onClick={togglePopup}
                  style={{
                    backgroundColor: "#444",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#23D693",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticePathway;
