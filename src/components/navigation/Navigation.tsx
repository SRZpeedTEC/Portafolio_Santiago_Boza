import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "../layout/Container";
import { navigationItems } from "../../data/navigation";
import styles from "./Navigation.module.css";

// Navigation owns active-section state and mobile-menu behavior for the one-page layout.
export function Navigation() {
  const [activeSection, setActiveSection] = useState(
    navigationItems[0]?.sectionId ?? "home",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderLinks = (indicatorScope: "desktop" | "mobile") => (
    <ul className={styles.links}>
      {navigationItems.map((item) => {
        const isActive = activeSection === item.sectionId;

        return (
          <li key={item.sectionId}>
            <a
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              {isActive ? (
                <motion.span
                  className={styles.indicator}
                  layoutId={`nav-${indicatorScope}`}
                />
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.brand} href="#home" onClick={closeMenu}>
            Santiago Boza Quirós
          </a>
          <div className={styles.desktopLinks}>{renderLinks("desktop")}</div>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => {
              setIsMenuOpen((currentValue) => !currentValue);
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </nav>
      </Container>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            className={styles.mobilePanel}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <Container>{renderLinks("mobile")}</Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
