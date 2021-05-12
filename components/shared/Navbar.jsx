import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const current = router.pathname;
  const setClassName = (path) => (current === path ? styles.active : "");
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul>
          <Link href="/">
            <a className={setClassName("/")}>Profile</a>
          </Link>
          <Link href="/projects">
            <a className={setClassName("/projects")}>Projects</a>
          </Link>
          <Link href="/resume">
            <a className={setClassName("/resume")}>Resume</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
