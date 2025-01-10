import { useState } from "react";
import LogoPianoProgressionRemoved from "../../assets/LogoPianoProgressionRemoved.png";

const PracticePathway = () => {
  
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Schedule added!");
    setShowPopup(false);
  };

  const tasks = [
    {
      date: "12 NOV 2024",
      title: "A2 - Sonata alla Scarlatti",
      time: "23.59 WIB",
      composer: "Germaine Tailleferre",
      status: "Submitted",
    },
    {
      date: "12 NOV 2024",
      title: "B1 - Prelude in D-flat (No. 1 from 8 Easy Pieces, Op. 43)",
      time: "23.59 WIB",
      composer: "Alexander Gretchaninov",
      status: "Submitted",
    },
  ];

  const getStatusStyle = (status) => {
    return status === "Submitted"
      ? { backgroundColor: "#23D693", color: "#fff", padding: "5px 10px", borderRadius: "5px" }
      : { backgroundColor: "#E74C3C", color: "#fff", padding: "5px 10px", borderRadius: "5px" };
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

      {/* Task Tabs */}
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
            Add Schedule
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#111",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div>
              <h4 style={{ margin: "0 0 5px 0", color: "#23D693" }}>{task.date}</h4>
              <h5 style={{ margin: "0 0 5px 0", color: "#fff" }}>{task.title}</h5>
              <p style={{ margin: "0", color: "#808191" }}>{task.composer}</p>
            </div>
            <span style={getStatusStyle(task.status)}>{task.status}</span>
          </div>
        ))}
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
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Schedule</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Song Title</label>
                <input
                  type="text"
                  placeholder="Song Title"
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
                <label style={{ display: "block", marginBottom: "5px" }}>Song Writer</label>
                <input
                  type="text"
                  placeholder="Song Writer"
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
                  <option value="" disabled selected>
                    Choose Grade
                  </option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                </select>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Additional Material</label>
                <input
                  type="text"
                  placeholder="Additional Material"
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
                <label style={{ display: "block", marginBottom: "5px" }}>Additional Notes</label>
                <textarea
                  placeholder="Additional Notes"
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
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <input
                  type="date"
                  required
                  style={{
                    width: "48%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
                <input
                  type="time"
                  required
                  style={{
                    width: "48%",
                    padding: "10px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
              </div>
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