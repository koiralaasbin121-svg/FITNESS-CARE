import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .workout-card, .poster-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">FITNESS<span>CARE</span></div>
          <nav className="main-navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Workouts</a></li>
              <li><a href="#">Coaching</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="header-cta"><a href="#" className="btn-primary">Join Now</a></div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <span className="badge">Performance & Discipline</span>
              <h1>Push Your <span>Limits</span> To The Max</h1>
              <p>Join the elite fitness community and transform your physique with professional coaching and
                state-of-the-art facilities.</p>
              <div className="hero-btns">
                <a href="#" className="btn-primary">Start Your Journey</a>
                <a href="#" className="btn-outline">View Classes</a>
              </div>
            </div>
          </div>
          <div className="hero-overlay"></div>
        </section>

        <section className="features-section container">
          <div className="section-header">
            <h2>Why Fitness Care?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="icon" style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>⚡</div>
              <h3>Expert Trainers</h3>
              <p>Learn from certified professionals who care about your results.</p>
            </div>
            <div className="feature-card glass">
              <div className="icon" style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🏋️</div>
              <h3>Modern Equipment</h3>
              <p>Access the latest technology in strength and cardio training.</p>
            </div>
            <div className="feature-card glass">
              <div className="icon" style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🧘</div>
              <h3>Mind & Body</h3>
              <p>Holistic programs including Yoga, Meditation, and Recovery.</p>
            </div>
          </div>
        </section>

        <section className="workouts-section container">
          <div className="section-header">
            <h2>Elite Programs</h2>
          </div>
          <div className="workouts-grid">
            <div className="workout-card glass">
              <div className="workout-img-mock"
                style={{
                  background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80')",
                  backgroundSize: "cover",
                  position: "relative"
                }}>
                <span
                  style={{
                    background: "var(--primary-color)",
                    color: "black",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    position: "absolute",
                    top: "20px",
                    left: "20px"
                  }}>Strength</span>
              </div>
              <div className="workout-info">
                <h3>Hypertrophy Max</h3>
                <p>Designed for pure muscle growth using science-backed volume and intensity techniques.</p>
                <a href="#" className="link-btn">View Program →</a>
              </div>
            </div>
            <div className="workout-card glass">
              <div className="workout-img-mock"
                style={{
                  background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80')",
                  backgroundSize: "cover",
                  position: "relative"
                }}>
                <span
                  style={{
                    background: "var(--secondary-color)",
                    color: "white",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    position: "absolute",
                    top: "20px",
                    left: "20px"
                  }}>Conditioning</span>
              </div>
              <div className="workout-info">
                <h3>Core Igniter</h3>
                <p>Build a rock-solid core and improve functional stability with high-intensity movements.</p>
                <a href="#" className="link-btn">View Program →</a>
              </div>
            </div>
            <div className="workout-card glass">
              <div className="workout-img-mock"
                style={{
                  background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80')",
                  backgroundSize: "cover",
                  position: "relative"
                }}>
                <span
                  style={{
                    background: "var(--accent-color)",
                    color: "black",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    position: "absolute",
                    top: "20px",
                    left: "20px"
                  }}>Hiit</span>
              </div>
              <div className="workout-info">
                <h3>Endurance Pro</h3>
                <p>Maximize your aerobic capacity and cardiovascular health through elite stamina training.</p>
                <a href="#" className="link-btn">View Program →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="poster-section container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
          </div>
          <div className="poster-grid">
            <div className="poster-card" style={{
              background: "url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1769&auto=format&fit=crop') center/cover no-repeat"
            }}>
              <div className="poster-content">
                <span className="poster-tag">Workshop</span>
                <h3>Deadlift Masterclass</h3>
                <p>Learn proper form and technique with world-class powerlifters. March 15th, 2026.</p>
              </div>
            </div>
            <div className="poster-card" style={{
              background: "url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop') center/cover no-repeat"
            }}>
              <div className="poster-content">
                <span className="poster-tag" style={{ background: "var(--accent-color)" }}>Competition</span>
                <h3>Summer Shred 2026</h3>
                <p>Join our annual transformation challenge. $5000 in prizes. Starts April 1st.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="membership-section container">
          <div className="section-header">
            <h2>Membership Plans</h2>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Day Pass</h3>
              <div className="price">$15<span>/day</span></div>
              <ul className="features-list">
                <li>Full Gym Access</li>
                <li>Locker Room Access</li>
                <li>Free Wi-Fi</li>
              </ul>
              <button className="btn-outline" onClick={() => setShowPopup(true)}>Get Started</button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Popular</div>
              <h3>Pro Athlete</h3>
              <div className="price">$89<span>/mo</span></div>
              <ul className="features-list">
                <li>24/7 Gym Access</li>
                <li>Unlimited Classes</li>
                <li>1 Personal Training Session</li>
                <li>Nutrition Guide</li>
              </ul>
              <button className="btn-primary" onClick={() => setShowPopup(true)}>Join Now</button>
            </div>

            <div className="pricing-card">
              <h3>Elite Performance</h3>
              <div className="price">$149<span>/mo</span></div>
              <ul className="features-list">
                <li>All Pro Features</li>
                <li>4 Personal Training Sessions</li>
                <li>Sauna & Recovery Access</li>
                <li>Custom Meal Plan</li>
              </ul>
              <button className="btn-outline" onClick={() => setShowPopup(true)}>Go Elite</button>
            </div>
          </div>
        </section>

        <section className="coach-section">
          <div className="container coach-flex">
            <div className="coach-image glass"
              style={{
                background: "url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80') center/cover no-repeat",
                border: "2px solid var(--primary-color)"
              }}>
            </div>
            <div className="coach-content">
              <span className="badge">Your Mentor</span>
              <h2>Meet Your Coach</h2>
              <p>I help dedicated individuals transform their lives through disciplined training and
                science-backed nutrition. With over 10 years of experience in elite performance, my mission is
                to help you unlock your true potential.</p>
              <ul className="stats">
                <li><strong>12+</strong> Years Exp</li>
                <li><strong>1.2k+</strong> Happy Clients</li>
                <li><strong>Cert.</strong> NSCA-CPT</li>
              </ul>
              <button onClick={() => setShowPopup(true)} className="btn-primary">Book A Free Session</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-info">
            <div className="logo">FITNESS<span>CARE</span></div>
            <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>Elevate your training. Become the master of your
              own body.</p>
          </div>
          <div className="footer-links">
            <h4 style={{ color: "var(--primary-color)", marginBottom: "1.5rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)" }}>
              <li>About</li>
              <li>Classes</li>
              <li>Membership</li>
            </ul>
          </div>
          <div className="footer-social">
            <h4 style={{ color: "var(--primary-color)", marginBottom: "1.5rem" }}>Follow Us</h4>
            <div style={{ color: "var(--text-muted)" }}>IG / TW / FB</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Fitness Care. All rights reserved.</p>
        </div>
      </footer>

      {showPopup && (
        <div className="popup-overlay" onClick={(e) => {
          if (e.target.className === 'popup-overlay') setShowPopup(false)
        }}>
          <div className="popup-content glass">
            <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
            <h2>Start Your Journey</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Fill out the form below and we'll get back to you within 24 hours.</p>

            <form className="contact-form" onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.elements[0].value,
                email: e.target.elements[1].value,
                interest: e.target.elements[2].value
              };

              try {
                const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
                const response = await fetch(`${apiBaseUrl}/api/contact`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });

                if (response.ok) {
                  alert('Thank you! Your request has been sent.');
                  setShowPopup(false);
                  e.target.reset();
                } else {
                  alert('Failed to send message. Please try again.');
                }
              } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
              }
            }}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select>
                  <option>Interested in...</option>
                  <option>Personal Coaching</option>
                  <option>Group Classes</option>
                  <option>Nutrition Plan</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }}>Send Request</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default App
