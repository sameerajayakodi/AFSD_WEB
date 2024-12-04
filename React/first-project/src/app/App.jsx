import { useContext, useEffect, useState } from "react";
import { Button, OutlineButton } from "../common/componets/Button/Button";
import TextField from "../common/componets/TextField/TextField";

import Card from "../common/componets/Card/Card";
import { ThemeContext } from "../common/context/ThemeContext";
import "./App.css";
//functional component
function App() {
  const [data, setData] = useState("default");

  const [count, setCount] = useState(0);

  const { theme, toggle } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme");
  }, [theme]);

  useEffect(() => {
    console.log("Running Component");
  }, [data, count]);

  function click2() {
    console.log("click event 2");
  }
  function click3() {
    console.log("click event 3");
  }

  //methana thami function eka call karanna ona
  //mechanism eka use karanna ona
  return (
    <>
      {/* <h1>Main Title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aut facere atque perspiciatis nemo obcaecati ipsam iusto blanditiis odio necessitatibus, delectus voluptas rem quidem laborum dignissimos dolor quod ratione. Provident.</p>
    <img src={image} alt="image" /> */}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        name={"Add Button"}
        style={{ backgroundColor: "green" }}
      />
      <Button
        onClick={click2}
        name={"Update Button"}
        style={{ backgroundColor: "black" }}
      />
      <Button
        onClick={click3}
        name={"Delete Button"}
        style={{ backgroundColor: "red" }}
      />
      <Button />
      <OutlineButton name={"Outline Button"} color={"green"} />
      <TextField type={"text"} placeholder={"username"} label={"Username"} />
      {/* <footer>2024 all right reserved</footer> */}
      <input type="text" onChange={(val) => setData(val.target.value)} />
      <p>Input Data: {data}</p>\<p>{count}</p>
      <Card>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          name={"Add Button"}
          style={{ backgroundColor: "green" }}
        />
        <Button
          onClick={click2}
          name={"Update Button"}
          style={{ backgroundColor: "black" }}
        />
        <Button
          onClick={click3}
          name={"Delete Button"}
          style={{ backgroundColor: "red" }}
        />
        <Button />
        <OutlineButton name={"Outline Button"} color={"green"} />
      </Card>
      <Button
        onClick={toggle}
        name={"Change Theme"}
        style={{ backgroundColor: "green" }}
      />
    </>
  );
}

export default App;
