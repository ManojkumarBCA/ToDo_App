import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { setTask } from "../redux/TaskSlice";
import axios from "../services/api";
import Header from "./Header";
const Task = () => {
  const { id } = useParams();
  const [currentTask, setCurrentTask] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchTask() {
      await axios.get(`/task/${id}`).then((res) => {
        setCurrentTask(res.data.task);
        dispatch(setTask(res.data.task));
      });
    }
    fetchTask();
  }, [id, dispatch]);

  if (!currentTask) {
    return;
  }
  return (
    <Box>
      <Header />
      <Container>
        <TaskForm task={currentTask} />
      </Container>
    </Box>
  );
};
export default Task;
