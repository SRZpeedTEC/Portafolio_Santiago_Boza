import { motion, useReducedMotion } from "motion/react";
import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { SocialLink } from "../../components/ui/SocialLink";
import { profile } from "../../data/profile";
import styles from "./Hero.module.css";

// Hero uses verified profile data and keeps the introduction concise for first-pass scanning.
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.grid}>
        <motion.div
          className={styles.content}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>Software-development portfolio</p>
          <h1 id="hero-title">{profile.fullName}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.summary}>{profile.heroSummary}</p>
          <div className={styles.actions} aria-label="Primary portfolio actions">
            <Button href="#projects">View projects</Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
          <div className={styles.socials} aria-label="Professional profiles">
            <SocialLink href={profile.github.url} label="Open Santiago's GitHub profile">
              {profile.github.label}
            </SocialLink>
            <SocialLink
              href={profile.linkedin.url}
              label="Open Santiago's LinkedIn profile"
            >
              {profile.linkedin.label}
            </SocialLink>
          </div>
        </motion.div>
        <motion.div
          className={styles.visual}
          aria-label="Reserved area for a future professional portrait or illustration"
          role="img"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <span>Computer engineering, full-stack systems, and technical projects</span>
        </motion.div>
      </Container>
    </section>
  );
}
