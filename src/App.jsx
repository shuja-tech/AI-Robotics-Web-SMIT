import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Setup intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Start the animation and unobserve so it only happens once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar hero-load">
        <div className="brand">
          Saylani <span>Mass IT Training</span> Program
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content-wrapper">
            <div className="hero-text hero-load" style={{ animationDelay: '0.1s' }}>
              <h1>Techno Kids <br /> AI & Robotics</h1>
              <p className="hero-subtitle">
                Phase 1 Curriculum | A talent discovery funnel to ignite curiosity
                and identify the motivated few ready for Advanced Engineering.
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <span>12</span>
                  <span>Weeks</span>
                </div>
                <div className="stat-item">
                  <span>36</span>
                  <span>Classes</span>
                </div>
                <div className="stat-item">
                  <span>12+</span>
                  <span>Hardware Projects</span>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper hero-load" style={{ animationDelay: '0.3s' }}>
              <img
                src="/hero.png"
                alt="Techno Kids IT Program"
                className="hero-image"
                onError={(e) => {
                  e.target.style.display = 'none'; // hide if not found locally yet
                }}
              />
            </div>
          </div>
        </section>

        <section className="container">

          <div className="overview-layout" style={{ marginBottom: "6rem" }}>
            <div className="animate-on-scroll slide-in-left">
              <h2 className="section-title">Program Overview</h2>
              <p className="section-subtitle">
                Phase 1 is not just a beginner course — it is a structured talent identification system.
                Only motivated, curious students who demonstrate drive and passion are selected for Phase 2.
              </p>

              <div className="card-grid" style={{ gridTemplateColumns: "1fr", marginBottom: 0 }}>
                <div className="card delay-100">
                  <span className="card-badge badge-green">Foundation</span>
                  <h3 className="card-title"><span className="emoji">🧱</span>Phase 1 - No Syntactic Barriers</h3>
                  <p>Phase 1 uses block programming only — no Python, no syntax errors, no typing barriers. The transition to real code in Phase 2 feels natural because students already understand the logic.</p>
                </div>
                <div className="card delay-200">
                  <span className="card-badge badge-blue">Evaluation</span>
                  <h3 className="card-title"><span className="emoji">🔭</span>Phase 2 - Selection Rubric</h3>
                  <p>Not exam-based. Instructors observe every student across all 12 weeks and shortlist based on demonstrated curiosity, drive, and character — not technical skill alone.</p>
                </div>
              </div>
            </div>

            <div className="overview-image-wrapper animate-on-scroll scale-up delay-200">
              <img
                src="/overview-img.png"
                alt="Kids learning robotics"
                className="overview-image"
                onError={(e) => {
                  e.target.style.display = 'none'; // hide if not found locally yet
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "5rem" }}>
            <div className="animate-on-scroll slide-in-left">
              <h2 className="section-title">Curriculum Timeline</h2>
            </div>

            <div className="card-grid">

              <div className="card animate-on-scroll slide-up delay-100">
                <span className="card-badge badge-amber">Month 1</span>
                <h3 className="card-title"><span className="emoji">⚡</span> Explore & Build</h3>
                <p>Students touch hardware for the first time. No theory dumps, no slide decks — pure hands-on exploration. Electricity, circuits, LEDs, buttons, buzzers. mBlock is introduced in Week 3 as a superpower, not a subject. Every class ends with something that works.</p>
                <ul className="ul-list">
                  <li><span className="bullet">✓</span> Breadboarding and circuits</li>
                  <li><span className="bullet">✓</span> LEDs, Buzzers, and Push Buttons</li>
                  <li><span className="bullet">✓</span> Block Logic Integration</li>
                </ul>
              </div>

              <div className="card animate-on-scroll slide-up delay-200">
                <span className="card-badge badge-indigo">Month 2</span>
                <h3 className="card-title"><span className="emoji">🚗</span> Move & Sense</h3>
                <p>Students add motors and wheels. Their mBlock code now physically moves something across the room. The emotional peak of Phase 1. The line follower in Week 8 is the "wow" milestone — the moment many students decide they want to become engineers.</p>
                <ul className="ul-list">
                  <li><span className="bullet">✓</span> Motor Drivers and Chassis Assembly</li>
                  <li><span className="bullet">✓</span> IR Sensors and Ultrasonic Sensors</li>
                  <li><span className="bullet">✓</span> Building a Line Follower Robot</li>
                </ul>
              </div>

              <div className="card animate-on-scroll slide-up delay-300">
                <span className="card-badge badge-green">Month 3</span>
                <h3 className="card-title"><span className="emoji">📡</span> Smart & Connected</h3>
                <p>Robots go wireless. Students control their car from a phone. Build smart automation systems. Servo-driven robot arms. Final project week is completely student-owned. Phase 2 selections announced at the public graduation Demo Day.</p>
                <ul className="ul-list">
                  <li><span className="bullet">✓</span> Bluetooth (HC-05) Integrations</li>
                  <li><span className="bullet">✓</span> Servo-motor robot arms</li>
                  <li><span className="bullet">✓</span> Demo Day Final Presentations</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="animate-on-scroll scale-up">
            <h2 className="section-title">Hardware Requirements</h2>
            <p className="section-subtitle">Most components are reused across all 12 weeks. The same Arduino and breadboard used in Week 1 is still in use in Week 12.</p>

            <div className="card">
              <h3 className="card-title"><span className="emoji">🎒</span> Student Kit (Phase 1)</h3>
              <ul className="ul-list">
                <li><span className="bullet">🔌</span> Arduino UNO R3 (Compatible) + USB Cable</li>
                <li><span className="bullet">🔋</span> Half-Size Breadboard & Jumper Wires (M-M, M-F)</li>
                <li><span className="bullet">💡</span> Assorted LEDs, Resistors, Active Buzzer</li>
                <li><span className="bullet">⚙️</span> L298N Motor Driver, DC Gear Motors, Smart Car Chassis</li>
                <li><span className="bullet">📡</span> IR Sensor Modules, HC-SR04 Ultrasonic Sensor</li>
                <li><span className="bullet">📶</span> HC-05 Bluetooth Module, SG90 Micro Servo Motors</li>
              </ul>
            </div>
          </div>

          <div className="outcomes-section animate-on-scroll slide-up">
            <h2 className="outcomes-title">Phase 1 Graduation Outcomes</h2>
            <p className="outcomes-subtitle">
              Every student who completes Phase 1 will have achieved these skills — regardless of whether they are selected for Phase 2.
            </p>

            <div className="outcomes-grid">
              <div className="outcome-card animate-on-scroll slide-up delay-100">
                <div className="outcome-icon">⚡</div>
                <div className="outcome-text">
                  Build and wire electronic circuits using LEDs, resistors, sensors, buzzers, and Arduino — independently, from scratch
                </div>
              </div>

              <div className="outcome-card animate-on-scroll slide-up delay-200">
                <div className="outcome-icon">🤖</div>
                <div className="outcome-text">
                  Understand and apply the Sense → Plan → Act model — the logic behind all robotic and automated systems
                </div>
              </div>

              <div className="outcome-card animate-on-scroll slide-up delay-100">
                <div className="outcome-icon">🚗</div>
                <div className="outcome-text">
                  Build and program a moving robot car with obstacle detection, line following, and full autonomous behavior
                </div>
              </div>

              <div className="outcome-card animate-on-scroll slide-up delay-200">
                <div className="outcome-icon">📡</div>
                <div className="outcome-text">
                  Control a robot wirelessly via Bluetooth from a smartphone using mBlock and HC-05 module
                </div>
              </div>

              <div className="outcome-card animate-on-scroll slide-up delay-100">
                <div className="outcome-icon">🏠</div>
                <div className="outcome-text">
                  Design and build a smart home automation system combining multiple sensors, outputs, and logical conditions
                </div>
              </div>

              <div className="outcome-card animate-on-scroll slide-up delay-200">
                <div className="outcome-icon">💡</div>
                <div className="outcome-text">
                  Identify a real-world problem in Pakistan and design a working robot or automation prototype that addresses it
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand animate-on-scroll slide-up delay-100">
            <h3>Techno Kids AI & Robotics</h3>
            <p>Phase 1 Curriculum: Empowering the next generation of engineers through hands-on robotics, algorithmic thinking, and structural problem-solving.</p>
          </div>
          
          <div className="footer-links animate-on-scroll slide-up delay-200">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Curriculum Timeline</a></li>
              <li><a href="#">Hardware Requirements</a></li>
              <li><a href="#">Phase 1 Outcomes</a></li>
              <li><a href="#">Phase 2 Selection</a></li>
            </ul>
          </div>

          <div className="footer-links animate-on-scroll slide-up delay-300">
            <h4>Contact Saylani Welfare</h4>
            <ul>
              <li>UAN: 111-729-526</li>
              <li><a href="https://www.saylaniwelfare.com" target="_blank" rel="noreferrer">www.saylaniwelfare.com</a></li>
              <li>Support a Child's Learning Journey</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Saylani Mass IT Training Program. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
