import styles from './page.module.css'

export default function Home() {
  return <>
    <div className={styles.mainDiv}>
      <div className={styles.heroSection}>
        <div className={styles.left}>
          <h1>Hi, I'm Yash</h1>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  </>
}
