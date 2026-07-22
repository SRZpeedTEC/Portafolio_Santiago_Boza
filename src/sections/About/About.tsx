import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { aboutDetails } from "../../data/about";
import styles from "./About.module.css";

// About lays out profile categories that can later be replaced with final personal content.
export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Reveal>
        <SectionHeader
          eyebrow="About me"
          title="A focused profile foundation"
          description="[Professional introduction]"
        />
      </Reveal>
      <div className={styles.grid}>
        {aboutDetails.map((detail, index) => (
          <Reveal key={detail.title} delay={index * 0.04}>
            <article className={styles.card}>
              <h3>{detail.title}</h3>
              <ul>
                {detail.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
