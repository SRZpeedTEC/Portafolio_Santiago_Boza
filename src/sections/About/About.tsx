import { Section } from "../../components/layout/Section";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { aboutDetails, aboutIntro } from "../../data/about";
import styles from "./About.module.css";

// About balances concise profile writing with structured facts that are easy to verify.
export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Reveal>
        <SectionHeader
          eyebrow="About me"
          title="Building from academic work into professional practice"
          description="A concise view of Santiago's current technical direction and verified public profile."
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
