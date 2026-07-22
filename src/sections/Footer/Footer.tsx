import { Container } from "../../components/layout/Container";
import styles from "./Footer.module.css";

// Footer closes the single-page experience with neutral placeholder-safe metadata.
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <p>Santiago Boza Quirós</p>
        <p>[Portfolio footer note]</p>
      </Container>
    </footer>
  );
}
