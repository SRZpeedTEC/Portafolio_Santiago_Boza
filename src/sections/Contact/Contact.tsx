import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { contactItems } from "../../data/profile";
import styles from "./Contact.module.css";

// Contact publishes only verified public channels for professional follow-up.
export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className={styles.section}>
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Professional contact"
          description="Verified public contact channels for professional and academic opportunities."
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
        </div>
      </Reveal>
    </Section>
  );
}
