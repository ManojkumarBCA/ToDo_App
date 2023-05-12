import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Taskform from "../components/TaskForm";
const TaskCreate = () => {
  return (
    <Box>
      <Container>
        <Taskform mode="create" />
      </Container>
    </Box>
  );
};

export default TaskCreate;
