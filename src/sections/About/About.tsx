import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { aboutDetails, aboutIntro } from "../../data/about";
import styles from "./About.module.css";

// About keeps the personal introduction short and direct.
export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Reveal>
        <SectionHeader
          eyebrow="About me"
          title="Building from academic work into professional practice"
          description="A short view of what I am studying, building, and improving."
        />
      </Reveal>
      <Reveal>
        <div className={styles.intro}>
          {aboutIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
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
