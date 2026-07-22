import { motion, useReducedMotion } from "motion/react";
import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { SocialLink } from "../../components/ui/SocialLink";
import styles from "./Hero.module.css";

// Hero establishes the editable professional introduction without inventing final content.
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
          <h1 id="hero-title">Santiago Boza Quirós</h1>
          <p className={styles.title}>[Professional title]</p>
          <p className={styles.summary}>[Short value proposition]</p>
          <div className={styles.actions} aria-label="Primary portfolio actions">
            <Button href="#projects">View projects</Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
          <div className={styles.socials} aria-label="Professional profiles">
            <SocialLink href="#" label="GitHub profile placeholder">
              GitHub
            </SocialLink>
            <SocialLink href="#" label="LinkedIn profile placeholder">
              LinkedIn
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
          <span>[Reserved visual area]</span>
        </motion.div>
      </Container>
    </section>
  );
}
