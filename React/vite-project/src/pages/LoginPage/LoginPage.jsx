import { Link } from "react-router-dom";

export default function LoginPage() {
  const clickLogin = () => {
    localStorage.setItem("afsd-token", "acpt");
    window.location.reload();
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">
        <button onClick={clickLogin}>Register here</button>
      </Link>
    </div>
  );
}
