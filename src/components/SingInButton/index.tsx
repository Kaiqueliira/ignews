import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SingInButton() {
  const isUsedLoggedIn = true;
  return isUsedLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Kaique Lira
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d301" />
      Sign in with GitHub
    </button>
  );
}
