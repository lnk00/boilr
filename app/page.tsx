import Btn from "./components/btn";
import Nav from "./components/nav";
import { sora } from "./fonts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <Nav />
        <div className={styles.version}>Version 1.0.0</div>
        <h1 className={`${sora.className} ${styles.headline}`}>The best boilerplate for your next SaaS idea.</h1>
        <Btn>Discover your boilerplate</Btn>
      </div>
    </main>
  )
}
