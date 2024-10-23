import { Button } from "@mui/material";
import { FormControl, InputLabel, Input } from "@mui/material";

export const ButtonMessage = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <InputLabel htmlFor="my-input">Password</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <Button variant="contained">Submit</Button>
    </FormControl>
  );
};
