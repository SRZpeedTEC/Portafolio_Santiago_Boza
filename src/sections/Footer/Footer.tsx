import { Container } from "../../components/layout/Container";
import { profile } from "../../data/profile";
import styles from "./Footer.module.css";

// Footer closes the single-page experience with verified profile information.
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <p>
          © {currentYear} {profile.fullName}
        </p>
        <p>{profile.footerNote}</p>
      </Container>
    </footer>
  );
}
