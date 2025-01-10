import { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const accountId = localStorage.getItem("accountId");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(`/tasks/${accountId}`);
      setTasks(data.data); // Menggunakan `data` untuk mengambil response
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to fetch tasks."
      );
    } finally {
      setLoading(false);
    }
  };

  // Add task
  const addTask = async (taskData) => {
    try {
      await axiosInstance.post(`/tasks/${accountId}`, taskData); // Tidak menyimpan response
      setMessage("Task added successfully!");
      fetchTasks(); // Refresh tasks
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to add task."
      );
    }
  };

  // Update task status
  const updateTaskStatus = async (taskId, status) => {
    try {
      await axiosInstance.put(`/tasks/${taskId}/${accountId}/status`, { status }); // Tidak menyimpan response
      setMessage("Task status updated successfully!");
      fetchTasks(); // Refresh tasks
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to update task status."
      );
    }
  };

  // Delete task
  const deleteTask = async (taskId) => {
    try {
      await axiosInstance.delete(`/tasks/${taskId}/${accountId}`); // Tidak menyimpan response
      setMessage("Task deleted successfully!");
      fetchTasks(); // Refresh tasks
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to delete task."
      );
    }
  };

  useEffect(() => {
    if (accountId) {
      fetchTasks();
    } else {
      setErrorMessage("Account ID not found. Please log in again.");
    }
  }, [accountId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      {loading && <p>Loading tasks...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <button
        onClick={() =>
          addTask({ title: "New Task", deadline: "2025-01-20T12:00:00Z" })
        }
      >
        Add Sample Task
      </button>

      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h3>{task.title}</h3>
              <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
              <p>Status: {task.status}</p>
              <button onClick={() => updateTaskStatus(task._id, "submitted")}>
                Mark as Submitted
              </button>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;