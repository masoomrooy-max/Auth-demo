
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        <section className="dashboard-welcome">
          <div>
            <span className="dashboard-eyebrow">
               YOUR PERSONAL SPACE
            </span>
            <h1>Welcome back, {user?.name}!</h1>
            <p>
              Here's your account overview. You're all set to go!
            </p>
          </div>

          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-info-card">
            <div className="info-icon blue-icon">👤</div>
            <p>Current User</p>
            <h2>{user?.name || "Guest"}</h2>
            <span>Your active session</span>
          </div>

          <div className="dashboard-info-card">
            <div className="info-icon green-icon">✅</div>
            <p>Account Status</p>
            <h2>Logged In</h2>
            <span>You are currently signed in</span>
          </div>

          <div className="dashboard-info-card">
            <div className="info-icon purple-icon">⚛️</div>
            <p>Authentication</p>
            <h2>Context API</h2>
            <span>React state management demo</span>
          </div>
        </section>

        <section className="dashboard-main-card">
          <h2>🚀 Quick Actions</h2>
          <p className="quick-description">
            Where would you like to go next?
          </p>

          <div className="dashboard-actions">
            <Link to="/" className="dashboard-action">
              <span>🏠</span>
              <div>
                <strong>Home</strong>
                <small>Visit the home page</small>
              </div>
              <span className="action-arrow">→</span>
            </Link>

            <div className="dashboard-action">
              <span>🔐</span>
              <div>
                <strong>Authentication Demo</strong>
                <small>Explore your current login session</small>
              </div>
              <span className="action-check">✓</span>
            </div>
          </div>

          <div className="dashboard-footer">
            <div>
              <strong>Finished for now?</strong>
              <p>You can safely log out of this demo.</p>
            </div>

            <button
              className="dashboard-logout"
              onClick={handleLogout}
            >
               Logout
            </button>
          </div>
        </section>

        <p className="dashboard-note">
          Auth Demo · Built with React and Context API
        </p>
      </div>
    </main>
  );
}

export default Dashboard;
