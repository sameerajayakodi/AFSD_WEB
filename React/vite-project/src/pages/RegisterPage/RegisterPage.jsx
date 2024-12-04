import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/login">
        <button>Login here with Link</button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login here with function
        </button>
      </Link>
    </div>
  );
}
