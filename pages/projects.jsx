import { PROJECT_DATA } from "../data";
import Head from 'next/head';
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";

import styles from "../styles/Projects.module.css";
const Projects = () => {
  const getImageUrl = (id) => {
    return buildUrl(id, {
      cloud: {
        cloudName: "mwritter",
      },
      transformations: {
        resize: {
          type: "lfill",
          width: 350,
          height: 300,
        },
      },
    });
  };

  const getPlaceholderUrl = (id) => {
    return buildUrl(id, {
      cloud: {
        cloudName: "mwritter",
      },
      transformations: {
        resize: {
          type: "lfill",
          width: 350,
          height: 300,
        },
        effect: {
          name: "blur:1000",
          quality: 1,
        },
      },
    });
  };

  return (
    <>
    <Head>
      <title>Projects</title>
    </Head>
    <main className="grid justify-center items-center text-lg mx-auto">
      <p className="mt-52 text-center mb-2">These are a few projects I've worked on recently - feel free to click on them to check out the code</p>
      <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-50 max-w-7xl rounded-2xl">
        <div className="flex flex-wrap justify-center gap-16 mt-10">
          {PROJECT_DATA.map((project) => (
            <div
              className={styles["project-card-container"]}
              key={project.image_id}
            >
              <div className={styles["project-title"]}>{project.title}</div>
              <div className={styles["project-card"]}>
                <a href={project.github} target="blank">
                  <div
                    style={{
                      position: "relative",
                      height: 0,
                      paddingTop: `${(300 / 350) * 100}%`,
                      backgroundImage: `url(${getPlaceholderUrl(
                        project.image_id
                      )})`,
                      backgroundPosition: "center center",
                      backgroundSize: `100%`,
                      borderRadius: "1rem",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "1rem",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <Image
                        src={getImageUrl(project.image_id)}
                        width="350"
                        height="300"
                        alt="project thumbnail"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles.badges}>
                {project.badges.map((badge) => (
                  <span key={badge} className={styles.badge}>
                    {badge === "Github" ? (
                      <a
                        className={styles["git-link"]}
                        href={project.github}
                        target="blank"
                      >
                        {badge}
                      </a>
                    ) : (
                      badge
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default Projects;
