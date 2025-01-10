import React, { useState } from "react";
import LogoPianoProgressionRemoved from "../../assets/LogoPianoProgressionRemoved.png";

const PracticePathway = () => {
  const [selectedTab, setSelectedTab] = useState("All");

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
    {
      date: "14 NOV 2024",
      title: "C1 - Dancing Barefoot in the Rain (from African Sketches)",
      time: "23.59 WIB",
      composer: "Robert Thompson",
      status: "Unanswered",
    },
    {
      date: "18 NOV 2024",
      title: "A2 - Sonata alla Scarlatti",
      time: "23.59 WIB",
      composer: "Germaine Tailleferre",
      status: "Unanswered",
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
        <img
          src={LogoPianoProgressionRemoved}
          alt="Piano Progression Logo"
          style={{ width: "120px" }}
        />
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
                <a
                  href="#"
                  style={{
                    color: "#808191",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Calendar */}
      <div style={{ marginTop: "100px", padding: "20px" }}>
        <div
          style={{
            backgroundColor: "#000",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              color: "#23D693",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            November 2024
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              color: "#808191",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
              (day) => (
                <div key={day}>{day}</div>
              )
            )}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "5px",
              marginTop: "20px",
            }}
          >
            {Array.from({ length: 30 }, (_, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: index === 2 ? "#23D693" : "transparent",
                  textAlign: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Task Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          {["All", "Date", "Urgent Task"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              style={{
                backgroundColor: selectedTab === tab ? "#23D693" : "transparent",
                color: selectedTab === tab ? "#fff" : "#808191",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#808191",
              border: "1px solid #808191",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            All Dates
          </button>
          <button
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
    </div>
  );
};

export default PracticePathway;
