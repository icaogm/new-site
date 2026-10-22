:root {
  --bg: #f3efe7;
  --panel: #f8f4ef;
  --ink: #191817;
  --muted: #5b5754;
  --line: rgba(25, 24, 23, 0.13);
  --accent: #d47a5d;
  --accent-soft: #f4d1c4;
  --shadow: 0 30px 60px rgba(24, 20, 18, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: "Manrope", sans-serif;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(243, 239, 231, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.04em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  color: var(--muted);
  font-size: 0.95rem;
}

.main-nav a {
  position: relative;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 1.5px;
  background: var(--ink);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.main-nav a:hover::after,
.main-nav a:focus-visible::after {
  transform: scaleX(1);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.15);
  font-weight: 700;
}

.hero {
  padding: 62px 0 42px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 52px;
}

.eyebrow {
  margin: 0 0 22px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-copy h1,
.section-heading h2,
.about-copy h2,
.site-footer h2 {
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 0.98;
}

.hero-copy h1 {
  max-width: 620px;
  font-size: clamp(3rem, 7vw, 6rem);
}

.intro {
  max-width: 560px;
  margin-top: 22px;
  color: var(--muted);
  font-size: 1.12rem;
  line-height: 1.72;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  background: var(--ink);
  color: #fff;
  box-shadow: var(--shadow);
}

.button.secondary {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink);
}

.mini-stats {
  display: flex;
  align-items: flex-start;
  gap: 38px;
  list-style: none;
  padding: 0;
  margin: 42px 0 0;
}

.mini-stats li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mini-stats span {
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.06em;
}

.mini-stats small {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.portrait-card {
  position: relative;
  width: min(100%, 560px);
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: var(--shadow);
}

.portrait-frame {
  overflow: hidden;
  border-radius: 24px;
  min-height: 640px;
}

.floating-note {
  position: absolute;
  left: 26px;
  bottom: 28px;
  width: min(300px, calc(100% - 52px));
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  border: 1px solid rgba(25, 24, 23, 0.08);
  border-radius: 18px;
  background: rgba(250, 247, 244, 0.72);
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 30px rgba(25, 24, 23, 0.06);
}

.tag {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--ink);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.floating-note strong {
  font-size: 0.9rem;
  line-height: 1.5;
  letter-spacing: -0.03em;
}

.projects {
  padding: 52px 0 20px;
}

.section-heading {
  margin-bottom: 30px;
}

.section-heading h2,
.about-copy h2,
.site-footer h2 {
  font-size: clamp(2.4rem, 5vw, 4.3rem);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
}

.project-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 40px rgba(29, 26, 24, 0.04);
}

.feature-card {
  grid-column: span 2;
}

.project-image {
  position: relative;
  min-height: 320px;
  background-position: center;
  background-size: cover;
}

.image-one {
  background-image: linear-gradient(180deg, rgba(17, 16, 15, 0.08), rgba(17, 16, 15, 0.18)),
    url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80');
}

.image-two {
  background-image: linear-gradient(180deg, rgba(17, 16, 15, 0.08), rgba(17, 16, 15, 0.16)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80');
}

.image-three {
  background-image: linear-gradient(180deg, rgba(17, 16, 15, 0.08), rgba(17, 16, 15, 0.17)),
    url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80');
}

.image-four {
  background-image: linear-gradient(180deg, rgba(17, 16, 15, 0.08), rgba(17, 16, 15, 0.15)),
    url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80');
}

.image-five {
  background-image: linear-gradient(180deg, rgba(17, 16, 15, 0.08), rgba(17, 16, 15, 0.16)),
    url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80');
}

.image-six {
  background-image: linear-gradient(180deg, rgba(17, 16, 15, 0.08), rgba(17, 16, 15, 0.18)),
    url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');
}

.project-badge {
  position: absolute;
  top: 18px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(25, 24, 23, 0.05);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-copy {
  padding: 24px 20px 26px;
}

.project-type {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  font-weight: 800;
  text-transform: uppercase;
}

.project-copy h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.1rem);
  letter-spacing: -0.06em;
}

.project-copy p:last-child {
  margin: 16px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.about {
  padding: 88px 0 20px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 34px;
  align-items: center;
}

.about-copy {
  max-width: 700px;
}

.about-copy p {
  margin-top: 20px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.about-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: 100%;
  max-width: 430px;
  padding: 28px 26px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
}

.panel-card h3 {
  margin: 0 0 18px;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}

.panel-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 18px;
  color: var(--muted);
}

.panel-card li {
  position: relative;
  padding-left: 18px;
  line-height: 1.5;
}

.panel-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.site-footer {
  padding: 68px 0 34px;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 30px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 960px) {
  .hero-grid,
  .about-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    grid-column: auto;
  }

  .main-nav {
    display: none;
  }

  .portrait-frame {
    min-height: 460px;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(100% - 28px, 1200px);
  }

  .nav {
    min-height: 68px;
  }

  .nav-cta {
    display: none;
  }

  .hero {
    padding-top: 40px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .button {
    width: 100%;
  }

  .mini-stats {
    gap: 22px;
    flex-wrap: wrap;
  }

  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
