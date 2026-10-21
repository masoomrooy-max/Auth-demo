
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
  <main className="home-page">
    <div className="home-card">
      <span className="home-badge">REACT PROJECT</span>

      <h1>Welcome to Auth Demo</h1>

      <p className="home-description">
        A simple authentication project built with React Context API.
      </p>

      {user ? (
        <div className="current-user">
          <h2>Welcome, {user.name}!</h2>
          <p>You are logged in successfully.</p>
          <p>Your dashboard is ready.</p>
        </div>
      ) : (
        <div className="current-user">
          <h2>Please log in first</h2>
          <p>
            Log in to view your account and access your dashboard.
          </p>
          <Link to="/login" className="home-login-link">
            Go to Login →
          </Link>
        </div>
      )}
    </div>
  </main>
);

}

export default Home;
