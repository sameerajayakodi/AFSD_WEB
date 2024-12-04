import Button from "../../common/components/Button/Button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Button name="Click me!" onClick={() => alert("Button clicked!")} />
    </div>
  );
}
