
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    login(name);
    navigate("/dashboard");
  }

  return (
    <div className="login-card">
      
      <h1>Welcome back!</h1>
<p className="login-subtitle">
  Enter your name to continue to your account.
</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Continue to Dashboard →</button>
      </form>
    </div>
  );
}

export default Login;
