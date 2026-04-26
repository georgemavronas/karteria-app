import styles from "../styles/scrollerWords.module.css";


const ScrollerWords = (props) => {
  return (
    <div className={styles.scrollingCard}>
      <div className={styles.scrollingLoader}>
        <div className={styles.scrollingWords}>
          <span className={styles.scrollingWord}>Design</span>
          <span className={styles.scrollingWord}>Engineering</span>
          <span className={styles.scrollingWord}>Management</span>
          <span className={styles.scrollingWord}>Quality</span>
          <span className={styles.scrollingWord}>Sustainability</span>
        </div>
      </div>
    </div>

  );
};

export default ScrollerWords;
