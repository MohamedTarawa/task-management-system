import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  // get tasks
  useEffect(() => {
    axios
      .get("http://localhost:3001/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  // add task
  const handleAddTask = () => {
    if (newTask.title.trim() === "") {
      alert("Title is required!");
      return;
    }

    axios
      .post("http://localhost:3001/tasks", newTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask({ title: "", description: "" });
      })
      .catch((error) => console.error(error));
  };

  // mark as completed
  const handleCompleteTask = (id, completed) => {
    axios
      .put(`http://localhost:3001/tasks/${id}`, { completed: !completed })
      .then(() => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: !completed } : task
          )
        );
      })
      .catch((error) => console.error(error));
  };

  // delete a task
  const handleDeleteTask = (id) => {
    axios
      .delete(`http://localhost:3001/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Task Management
      </Typography>

      <Box sx={{ marginBottom: 3 }}>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Task Description"
          variant="outlined"
          fullWidth
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Box>

      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              borderBottom: "1px solid #ccc",
              paddingLeft: 0,
              paddingRight: 0,
              alignItems: "center",
              backgroundColor: task.completed ? "#e0f7fa" : "transparent",
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id, task.completed)}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#888" : "#000",
                  }}
                >
                  {task.title}
                </Typography>
              }
              secondary={task.description}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
