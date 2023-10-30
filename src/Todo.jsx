import { useSelector, useDispatch } from "react-redux";
import { addValue, setValue } from "./Component/Slice/TodoSlice";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Todo = () => {
  const value = useSelector((state) => state.todo.value);
  const data = useSelector((state) => state.todo.data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddValue = () => {
    dispatch(addValue(value));
  };

  const dispatch = useDispatch();
  return (
    <>
      <Paper elevation={3} component={Box} p={3} width={400} mx="auto">
        <Typography variant="h5" gutterBottom>
          To Do List
        </Typography>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={value}
          onChange={(e) => dispatch(setValue(e.target.value))}
        />
        <Box display="flex" alignItems="center">
          <TextField
            label="Search"
            type="text"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddValue}>
            Add
          </Button>
          <List>
            {data.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </>
  );
};

export default Todo;
