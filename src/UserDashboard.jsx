
import { Link } from 'react-router-dom'
import './Dashboard.css'

function UserDashboard() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-logo">
          🐾 PawCare
        </Link>

        <p className="sidebar-label">USER MENU</p>
        <a href="#overview" className="sidebar-link active">
          ◈ Overview
        </a>
        <a href="#dogs" className="sidebar-link">
          ♡ Dogs in Need
        </a>
        <a href="#adoption" className="sidebar-link">
          ♧ My Adoption Interests
        </a>

        <Link to="/" className="sidebar-logout">
          ← Back to Website
        </Link>
      </aside>

      <main className="dashboard-main" id="overview">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">USER DASHBOARD</p>
            <h1>Welcome to PawCare! 🐾</h1>
            <p className="dashboard-muted">
              Every little act of kindness makes a difference.
            </p>
          </div>

          <div className="user-avatar">U</div>
        </header>

        <section className="welcome-card">
          <div>
            <span className="welcome-tag">A LITTLE LOVE GOES A LONG WAY</span>
            <h2>Make a difference, one paw at a time.</h2>
            <p>
              Discover lovely dogs waiting for care, kindness,
              and a loving home.
            </p>
            <Link to="/#dogs" className="dashboard-button">
              Explore Dogs ↗
            </Link>
          </div>
          <div className="welcome-paw">🐾</div>
        </section>

        <section className="dashboard-stats">
          <article className="stat-card">
            <span>♡</span>
            <p>Dogs to Discover</p>
            <h3>3</h3>
          </article>

          <article className="stat-card">
            <span>⌂</span>
            <p>Adoption Interests</p>
            <h3>0</h3>
          </article>

          <article className="stat-card">
            <span>♥</span>
            <p>Kindness Matters</p>
            <h3>∞</h3>
          </article>
        </section>

        <section className="dashboard-section" id="dogs">
          <div className="dashboard-section-heading">
            <div>
              <p className="dashboard-eyebrow">FIND YOUR FRIEND</p>
              <h2>Dogs in Need</h2>
            </div>
            <Link to="/#dogs">View website ↗</Link>
          </div>

          <div className="dashboard-note">
            <span>🐶</span>
            <div>
              <h3>Your next best friend is waiting.</h3>
              <p>
                Visit the Dogs in Need section on our homepage
                to discover Milo, Bella, and Coco.
              </p>
            </div>
          </div>
        </section>

        <section className="dashboard-section" id="adoption">
          <p className="dashboard-eyebrow">YOUR ACTIVITY</p>
          <h2>My Adoption Interests</h2>
          <div className="empty-state">
            <span>♡</span>
            <h3>No interests yet</h3>
            <p>
              When you choose to express interest in a dog,
              your activity can appear here.
            </p>
          </div>
        </section>

        <footer className="dashboard-footer">
          Made with ♥ for every paw.
        </footer>
      </main>
    </div>
  )
}

export default UserDashboard
