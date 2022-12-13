import { PROJECT_DATA } from "../data";
import Head from "next/head";
import styles from "../styles/Resume.module.css";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className="flex justify-center text-xl">
        <div className="flex flex-col align-middle bg-opacity-50 bg-gray-200 mx-auto my-auto md:max-w-7xl rounded-2xl md:p-32 p-10 gap-10 mt-60 mb-20">
          <h1 className="text-4xl text-center">Matthew Ritter</h1>
          <div className="grid gap-5 justify-center">
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
          <section>
            <h2 className="text-2xl font-bold mb-2">Profile</h2>
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
          <section>
            <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
            <h4>Full Stack Software Engineer</h4>
            <p>Azalea Health Innovations Inc.</p>
            <ul className="list-circle sm:ml-16">
              <li className="m-5">
                Work closely with team members in a fast paced agile environment
                using continuous integration and delivery practices.
              </li>
              <li className="m-5">
                Improve application stability and performance through features
                and bug fixes.
              </li>
              <li className="m-5">
                Participate in pair programming, mentoring, peer review and on
                boarding for new engineers.
              </li>
              <li className="m-5">
                Implement full stack solutions to achieve client goals related
                to workflow improvements, patient privacy, client reporting,
                HIPAA auditing, and encounter charting.
              </li>
            </ul>
          </section>
          <section className>
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <div className="grid gap-5">
              <ul className="list-circle sm:ml-16">
                <li className="m-5">
                  <u className="ml-2">Web:</u> React, Redux, Vue, Backbone,
                  Next, Express, .NET, C#, CSS, SASS, Bootstrap, Tailwind, PHP,
                  HTML, JavaScript
                </li>
                <li className="m-5">
                  <u className="ml-2">Mobile:</u> Jave, Dart, Flutter,
                  Cloud-Firestore
                </li>
                <li className="m-5">
                  <u className="ml-2">Data Science:</u> Python, Shell Script,
                  Rust
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <div className="grid gap-5">
              {PROJECT_DATA.map((project) => (
                <div key={project.title} className={styles.gitLink}>
                  <a target="blank" href={project.link}>
                    {project.title}
                  </a>
                  <p>{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <p>
              Valdosta State University, Valdosta, Ga – BS in Computer
              Information Systems
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
