import {
  FormControl,
  FormLabel,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";

import { useState } from "react";

function MuiRadioDemo() {

  const [gender, setGender] = useState("");

  function handleGender(event) {
    setGender(event.target.value);
  }

  return (
    <>
      <FormControl>

        <FormLabel>Select Gender</FormLabel>

        <RadioGroup value={gender} onChange={handleGender}>

          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
          />

          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
          />

        </RadioGroup>

      </FormControl>

      <Typography>
        The Gender Selected is {gender}
      </Typography>
    </>
  );
}

export default MuiRadioDemo;