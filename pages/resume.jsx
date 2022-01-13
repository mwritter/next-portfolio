import { PROJECT_DATA } from "../data";
import Head from 'next/head';
import styles from "../styles/Resume.module.css";

const Resume = () => {
  return (
    <>
    <Head>
      <title>Resume</title>
    </Head>
    <div className={styles.container}>
      <div className={styles["card-page"]}>
        <h1>Matthew Ritter</h1>
        <div className={styles.info}>
          <span>
            <b>Phone:</b> 229-977-5525
          </span>
          <span>
            <b>Address:</b> 441 Brookview Dr, Valdosta Ga
          </span>
          <span>
            <b>Email:</b> matthewwilliamritter@gmail.com
          </span>
          <span className={styles.gitLink}>
            <b>GitHub:</b>{" "}
            <a href="https://www.github.com/mwritter" target="blank">
              github.com/mwritter
            </a>
          </span>
        </div>
        <section className={styles.section}>
          <h2>Profile</h2>
          <p>Software Engineer</p>
          <p>
            <i>
              As a Software Engineer and recent graduate with a BS in Computer
              Information Systems my focus is to better myself as a person and
              as a engineer. I am eager to learn and see all obstacles as an
              opportunity for growth.
            </i>
          </p>
        </section>
        <section className={styles.section}>
          <h2>Work Experience</h2>
          <h4>Full Stack Software Engineer</h4>
          <p>Azalea Health Innovations Inc.</p>
          <ul>
              <li>Work closely with team memebers in a fast paced agile environment using continuous integration and delivery practices.</li>
              <li>Improve application stability and performance through features and bug fixes.</li>
              <li>Participate in pair programming, mentoring, peer review and on boarding for new engineers.</li>
              <li>Implemente full stack solutions to achieve client goals related to workflow improvements, patient privacy, client reporting, HIPAA auditing, and encounter charting.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.info}>
            <span>
              <b>Web:</b> React, Redux, Vue, Backbone, Next, Express, .NET, C#, MongoDB,
              Firebase, Heroku, MLab, CSS, SASS, Bootstrap, PHP, HTML, JavaScript
            </span>
            <span>
              <b>Mobile:</b> Jave, Dart, Flutter, Cloud-Firestore
            </span>
            <span>
              <b>Data Science:</b> Python, Shell Script, Rust
            </span>
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          {PROJECT_DATA.map((project) => (
            <div key={project.title} className={styles.gitLink}>
              <a target="blank" href={project.link}>
                {project.title}
              </a>
              <p>{project.desc}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          <p>
            Valdosta State University, Valdosta, Ga – BS in Computer Information
            Systems
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default Resume;
