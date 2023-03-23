import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const TaskHeader = () => {
  const navigate = useNavigate();
  return (
    <Box display={"flex"} my={2} justifyContent={"space-between"}>
      <Box display={"flex"} alignItems={"center"}>
        <HomeIcon sx={{ color: "white", fontSize: "2rem" }} />
        <Typography sx={{ color: "white" }} variant="h5">
          Tasks
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={() => navigate("create")}>
          <AddIcon sx={{ color: "white", fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
