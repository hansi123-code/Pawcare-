
import { Link } from 'react-router-dom'
import './Dashboard.css'

function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar admin-sidebar">
        <Link to="/" className="dashboard-logo">
          🐾 PawCare
        </Link>

        <p className="sidebar-label">ADMIN PANEL</p>

        <a href="#admin-overview" className="sidebar-link active">
          ◈ Overview
        </a>

        <a href="#manage-dogs" className="sidebar-link">
          ♡ Manage Dogs
        </a>

        <a href="#manage-adoptions" className="sidebar-link">
          ♧ Adoption Requests
        </a>

        <a href="#manage-users" className="sidebar-link">
          ☺ Manage Users
        </a>

        <Link to="/" className="sidebar-logout">
          ← Back to Website
        </Link>
      </aside>

      <main className="dashboard-main" id="admin-overview">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">ADMINISTRATION</p>
            <h1>Admin Dashboard</h1>
            <p className="dashboard-muted">
              Welcome back! Here's your PawCare overview.
            </p>
          </div>

          <div className="admin-avatar">A</div>
        </header>

        <section className="admin-welcome">
          <div>
            <span>PAWCARE MANAGEMENT</span>
            <h2>Every paw deserves a better tomorrow.</h2>
            <p>
              Manage dog profiles, review adoption interest,
              and help build a kinder world for animals.
            </p>
          </div>
          <div className="admin-paw">🐾</div>
        </section>

        <section className="dashboard-stats">
          <article className="stat-card">
            <span>🐕</span>
            <p>Registered Dogs</p>
            <h3>3</h3>
          </article>

          <article className="stat-card">
            <span>♡</span>
            <p>Adoption Requests</p>
            <h3>0</h3>
          </article>

          <article className="stat-card">
            <span>☺</span>
            <p>Registered Users</p>
            <h3>0</h3>
          </article>
        </section>

        <section className="dashboard-section" id="manage-dogs">
          <div className="dashboard-section-heading">
            <div>
              <p className="dashboard-eyebrow">DOG MANAGEMENT</p>
              <h2>Manage Dogs</h2>
            </div>
          </div>

          <div className="admin-management-card">
            <div className="management-icon">🐶</div>
            <div className="management-content">
              <h3>Dog Profiles</h3>
              <p>
                This section will display dog profiles and
                management options in a future version.
              </p>
            </div>
            <span className="demo-status">Demo</span>
          </div>
        </section>

        <section className="dashboard-section" id="manage-adoptions">
          <p className="dashboard-eyebrow">ADOPTION MANAGEMENT</p>
          <h2>Adoption Requests</h2>

          <div className="admin-empty-state">
            <span>♡</span>
            <h3>No requests to review</h3>
            <p>
              Adoption requests can appear here when
              this feature is implemented.
            </p>
          </div>
        </section>

        <section className="dashboard-section" id="manage-users">
          <p className="dashboard-eyebrow">USER MANAGEMENT</p>
          <h2>Manage Users</h2>

          <div className="admin-management-card">
            <div className="management-icon">👥</div>
            <div className="management-content">
              <h3>User Directory</h3>
              <p>
                User account management will be available
                when a backend is connected.
              </p>
            </div>
            <span className="demo-status">Demo</span>
          </div>
        </section>

        <footer className="dashboard-footer">
          PawCare Admin Panel · Made with care ♥
        </footer>
      </main>
    </div>
  )
}

export default AdminDashboard
