import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import UserDashboard from './UserDashboard'
import AdminDashboard from './AdminDashboard'
import { useState } from "react";

function Home() {

  
const [currentUser, setCurrentUser] = useState(() => {
  const savedUser = localStorage.getItem("pawcareCurrentUser");

  try {
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
});

function handleLogout() {
  localStorage.removeItem("pawcareCurrentUser");
  setCurrentUser(null);
}

  return (


    <div className="pawcare">
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">🐾</span>
          PawCare
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#dogs">Dogs in Need</a>
          <a href="#about">About Us</a>
        </div>

        

<div className="nav-actions">
  {currentUser ? (
    <>
      <Link
        to={
          currentUser.role === "admin"
            ? "/admin-dashboard"
            : "/user-dashboard"
        }
       
className="nav-profile"
>
  👤 Profile
</Link>


      <button
        type="button"
        className="nav-logout"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </>
  ) : (
    <>
      <Link to="/login" className="nav-login">
        Log In
      </Link>

      <Link to="/register" className="nav-register">
        Create Account
      </Link>
    </>
  )}
</div>

      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="dot"></span>
            EVERY PAW MATTERS
          </span>

          <h1>
            Every Paw
            <br />
            Deserves <span>Love.</span>
          </h1>

          <p className="hero-description">
            Every stray dog deserves a safe place, a caring heart, and a chance
            to feel loved. Together, we can make their world a little brighter.
          </p>

          <div className="hero-buttons">
            <a href="#dogs" className="primary-button">
              Find a Friend <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              Our Mission
            </a>
          </div>

          <div className="hero-note">
            <span className="heart">♥</span>
            Small acts of kindness can change a life.
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-decoration"></div>

         
<img
  className="hero-dog"
  src="/Dogs/dog1.jfif"
  alt="A friendly dog waiting for a loving home"
/>

          <div className="image-badge">
            <span className="badge-icon">♥</span>
            <div>
              <strong>Love changes lives</strong>
              <p>Be a reason to smile.</p>
            </div>
          </div>

          <span className="floating-paw paw-one">🐾</span>
          <span className="floating-paw paw-two">🐾</span>
        </div>
      </main>

<section className="bottom-strip">
        <span>♡ Compassion</span>
        <span>✳ Care</span>
        <span>♡ Second Chances</span>
      </section>

      <section className="dogs-section" id="dogs">
        <div className="section-heading">
          <span className="eyebrow">
            <span className="dot"></span>
            WAITING FOR A HOME
          </span>

          <h2>
            Meet Your New <span>Best Friend.</span>
          </h2>

          <p>
            These lovely souls are waiting for kindness,
            care, and a place to call home.
          </p>
        </div>

        <div className="dogs-grid">
          <article className="dog-card">
            <img
              src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=700&q=80"
              alt="Friendly dog named Milo"
            />
            <div className="dog-info">
              <div className="dog-title">
                <h3>Milo</h3>
                <span className="dog-age">Young</span>
              </div>
              <p className="dog-description">
                A playful, friendly soul who loves attention
                and deserves a caring home.
              </p>
              <a href="#get-involved" className="dog-button">
                Meet Milo <span>↗</span>
              </a>
            </div>
          </article>

          <article className="dog-card">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80"
              alt="Sweet dog named Bella"
            />
            <div className="dog-info">
              <div className="dog-title">
                <h3>Bella</h3>
                <span className="dog-age">Adult</span>
              </div>
              <p className="dog-description">
                A gentle companion who needs a safe place
                and someone to trust.
              </p>
              <a href="#get-involved" className="dog-button">
                Meet Bella <span>↗</span>
              </a>
            </div>
          </article>

          <article className="dog-card">
            <img
              src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=700&q=80"
              alt="Cute dog named Coco"
            />
            <div className="dog-info">
              <div className="dog-title">
                <h3>Coco</h3>
                <span className="dog-age">Young</span>
              </div>
              <p className="dog-description">
                An adorable friend ready to bring joy
                into a loving family's life.
              </p>
              <a href="#get-involved" className="dog-button">
                Meet Coco <span>↗</span>
              </a>
            </div>
          </article>
        </div>


     

        <p className="dogs-note">
          Every dog deserves love, care, and a second chance. ♡
        </p>
      </section>

      
   <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=85"
            alt="A person showing kindness to a dog"
          />
          <div className="about-image-label">
            <span>♡</span>
            Kindness makes a difference
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">
            <span className="dot"></span>
            OUR PURPOSE
          </span>

          <h2>
            A Little Care Can
            <br />
            Change a <span>Life.</span>
          </h2>

          <p>
            At PawCare, we believe every dog deserves kindness,
            safety, and a chance to find a loving home.
          </p>

          <p>
            Our mission is to raise awareness about stray dogs,
            encourage responsible adoption, and inspire people
            to make a difference through small acts of care.
          </p>

          <div className="mission-points">
            <div className="mission-point">
              <span className="mission-icon">♡</span>
              <div>
                <h3>Spread Kindness</h3>
                <p>Encourage care and compassion for every dog.</p>
              </div>
            </div>

            <div className="mission-point">
              <span className="mission-icon">⌂</span>
              <div>
                <h3>Promote Adoption</h3>
                <p>Help people discover the value of adoption.</p>
              </div>
            </div>
          </div>

          <a href="#get-involved" className="primary-button about-button">
            Join Our Mission <span>↗</span>
          </a>
        </div>
      </section>

      
      <section className="involved-section" id="get-involved">
        <div className="involved-heading">
          <span className="eyebrow">
            <span className="dot"></span>
            BE PART OF THE CHANGE
          </span>

          <h2>
            Kindness Starts <span>With You.</span>
          </h2>

          <p>
            You don't have to change the whole world.
            Start by changing one dog's world.
          </p>
        </div>

        <div className="involved-grid">
          <article className="involved-card">
            <div className="involved-icon">♡</div>
            <h3>Adopt with Love</h3>
            <p>
              Give a dog a loving home and a chance
              to experience a better life.
            </p>
            <a href="#dogs">
              Meet the Dogs <span>↗</span>
            </a>
          </article>

          <article className="involved-card featured-card">
            <div className="involved-icon">✳</div>
            <h3>Volunteer Your Time</h3>
            <p>
              Share your time, kindness, and skills
              to support animals in need.
            </p>
            <a href="#contact">
              Get Involved <span>↗</span>
            </a>
          </article>

          <article className="involved-card">
            <div className="involved-icon">♡</div>
            <h3>Spread Awareness</h3>
            <p>
              Share the message of responsible care
              and help others understand adoption.
            </p>
            <a href="#contact">
              Learn More <span>↗</span>
            </a>
          </article>
        </div>
      </section>


      

      
      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="logo footer-logo">
              <span className="logo-icon">🐾</span>
              PawCare
            </a>

            <p>
              Every paw deserves love, care, and a chance
              to find a safe place to call home.
            </p>

            <span className="footer-tagline">
              Made with ♥ for every paw.
            </span>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#dogs">Dogs in Need</a>
            <a href="#about">About Us</a>
            <a href="#get-involved">Get Involved</a>
          </div>

          <div className="footer-links">
            <h3>Get Involved</h3>
            <a href="#dogs">Adopt a Dog</a>
            <a href="#get-involved">Volunteer</a>
            <a href="#get-involved">Spread Awareness</a>
          </div>

          <div className="footer-contact">
            <h3>Our Purpose</h3>
            <p>
              Building a kinder world for stray dogs
              through awareness, compassion, and care.
            </p>
            <a href="#about" className="footer-contact-link">
              Learn About Us ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PawCare. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

    
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user-dashboard"
          element={<UserDashboard />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
