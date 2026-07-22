import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Button } from "../../components/ui/Button";
import { Reveal } from "../../components/ui/Reveal";
import styles from "./Contact.module.css";

const contactItems = [
  {
    label: "Professional email",
    value: "[Contact information]",
    href: "mailto:professional.email@example.com",
  },
  {
    label: "GitHub",
    value: "[GitHub]",
    href: "#",
  },
  {
    label: "LinkedIn",
    value: "[LinkedIn]",
    href: "#",
  },
  {
    label: "Location",
    value: "[Location]",
    href: "#",
  },
];

// Contact keeps outreach simple with standard links and no backend or third-party form.
export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className={styles.section}>
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Professional contact"
          description="[Contact information]"
        />
      </Reveal>
      <Reveal>
        <div className={styles.panel}>
          <div className={styles.list}>
            {contactItems.map((item) => (
              <a key={item.label} href={item.href} className={styles.item}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
          <Button href="#" variant="secondary" aria-label="Download CV placeholder">
            Download CV
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
