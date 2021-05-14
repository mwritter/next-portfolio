import { TECH_BADGES } from "../data";
import Head from 'next/head';
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const badges = TECH_BADGES;
  return (
    <>
    <Head>
      <title>Matthew Ritter</title>
    </Head>
    <div className={styles.container}>
      <div className={styles["card-page"]}>
        <div className={styles.heading}>Hi my name is Matthew Ritter</div>
        <div className={styles.desc}>
          I'm a software engineer. I like to build things and I use software development
          to do just that. These are the technologies I'm currently working with
          in my role as a softwear engineer and in my own projects.
          I'm always finding new tools to solve problems, which means I'm always
          learning new things and I love that about software development.
        </div>
        <div className={styles.badges}>
          {badges.map((badge) => {
            return (
              <Image
                key={badge.image_id}
                src={badge.url}
                title={badge.title}
                alt={badge.title}
                height="55"
                width="55"
              />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
