"use client";

import React, { useState } from "react";
import styles from "./Home_Page.module.css";
import { motion } from "framer-motion";

// Chart.js imports
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

// Register components for Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export const Home_Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Doughnut chart data: reduction of risks
  const doughnutData = {
    labels: ["Stroke ↓27%", "Heart Disease ↓40%"],
    datasets: [
      {
        data: [27, 40],
        backgroundColor: ["#1abc9c", "#16a085"],
        hoverOffset: 10,
      },
    ],
  };

  // Bar chart data: mental health benefits
  const barData = {
    labels: ["Depression ↓", "Anxiety ↓", "Cognition ↑"],
    datasets: [
      {
        label: "% Improvement",
        data: [30, 25, 20],
        backgroundColor: ["#1abc9c", "#48c9b0", "#76d7c4"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true, max: 50, grid: { color: "#eee" } },
    },
  };

  const founders = [
    {
      name: "Sebastián Morales",
      img: "/sebastianmorales.jpg",
      instagram: "https://www.instagram.com/sebastianmorales.mp/",
      twitter: "https://x.com/joelabril16",
    },
    {
      name: "Joel Abril",
      img: "/joelabril.png",
      instagram: "https://www.instagram.com/jabril16/",
      twitter: "#",
    },
    {
      name: "Nicholas Guevara",
      img: "/NickGuevara.jpg",
      instagram: "https://www.instagram.com/n_gdidier/",
      twitter: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <span className={styles.kainnos}>KAINNOS</span>
          <span className={styles.xp}>XP</span>
        </h1>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          {["about", "features", "brands", "growth", "founders", "contact"].map(
            (id) => (
              <a key={id} href={`#${id}`} className={styles.navLink}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            )
          )}
        </nav>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
        {menuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      </header>

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/KongKainnos.png" alt="Mascot" className={styles.mascot} />
          <h2 className={styles.title}>Empowering Your Fitness Journey</h2>
          <p className={styles.subtitle}>
            KainnosXP connects athletes, brands, sponsors, and communities
            through challenges, certified badges, and monetization tools.
          </p>
          <a href="#about" className={styles.cta}>
            Discover More
          </a>
        </motion.div>
      </main>

      <section id="about" className={styles.section}>
        <motion.div
          className={styles.sectionContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>What is KainnosXP?</h3>
          <p>
            A social fitness platform where beginners meet pros, brands partner
            with athletes, and communities grow stronger. It's more than an
            app—it’s a movement.
          </p>
        </motion.div>
      </section>

      <section id="features" className={styles.sectionAlt}>
        <motion.div
          className={styles.sectionContent}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Key Features</h3>
          <ul className={styles.featureList}>
            <li>🔥 Challenges with real rewards</li>
            <li>🎖️ Blockchain-verified badges (NFT upcoming)</li>
            <li>📊 Performance tracking & analytics</li>
            <li>🤝 Brand‑athlete‑community connections</li>
            <li>💼 Income streams for athletes & coaches</li>
          </ul>
        </motion.div>
      </section>

      <section id="brands" className={styles.section}>
        <motion.div
          className={styles.sectionContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Why Brands Partner with Us</h3>
          <p>
            Brands gain access to engaged athletes and communities with targeted
            campaigns, leveraging real user stories and health-driven analytics
            for increased visibility and ROI.
          </p>
        </motion.div>
      </section>

      <section id="growth" className={styles.sectionAlt}>
        <motion.div
          className={styles.sectionContent}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Athlete Growth & Recognition</h3>
          <p>
            From beginner to pro: build reputation, showcase performance, and
            monetize training and challenges. Elite athletes: strengthen your
            legacy with credentialed achievements.
          </p>
        </motion.div>
      </section>

      <section id="metrics" className={styles.section}>
        <h3>Impact of Sports on Health</h3>
        <div className={styles.charts}>
          <div className={styles.chartContainer}>
            <Doughnut data={doughnutData} />
            <p>
              Exercise significantly reduces the risk of stroke and heart
              disease.
            </p>
          </div>
          <div className={styles.chartContainer}>
            <Bar data={barData} options={barOptions} />
            <p>
              Sports activity improves mental health and cognitive functions.
            </p>
          </div>
        </div>
      </section>

      <section id="founders" className={styles.sectionAlt}>
        <h3>Founders</h3>
        <div className={styles.foundersGrid}>
          {founders.map((f, i) => (
            <motion.div
              key={i}
              className={styles.founderCard}
              whileHover={{ scale: 1.05 }}
            >
              <img src={f.img} alt={f.name} className={styles.founderImg} />
              <p className={styles.founderName}>{f.name}</p>
              <div className={styles.socialLinks}>
                <a href={f.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={f.twitter} target="_blank" rel="noreferrer">
                  X
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h3>Contact Us</h3>
        <form
          className={styles.contactForm}
          action="mailto:teamkainnos@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message or investment inquiry"
            required
          />
          <button type="submit" className={styles.cta}>
            Send Message
          </button>
        </form>
      </section>

      <section className={styles.socialSection}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/kainnos.official/"
            target="_blank"
            rel="noreferrer"
            aria-label="Kainnos Instagram"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/kainnosxp"
            target="_blank"
            rel="noreferrer"
            aria-label="Kainnos Twitter"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2025 <strong>KAINNOS</strong>
        <span className={styles.xp}>XP</span>. Inspiring movement.
      </footer>
    </div>
  );
};
