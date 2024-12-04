import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

import Button from "@mui/material/Button";

import DropDown from "../../common/components/DropDown/DropDown";
import "./style.css";
export default function MuiPage() {
  const option = ["male", "female"];
  const option2 = ["10", "12", "20", "30"];

  const [age, setAge] = useState("12");

  return (
    <div className="main-div">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>

      <DropDown
        onChange={(val) => setAge(val)}
        dropdownName="Age"
        value={age}
        option={option2}
      />
      <DropDown dropdownName="Gender" value={"male"} option={option} />
    </div>
  );
}
