import Image from "next/image";
import styles from "./style.module.css";
import Logo from "../../../public/logo.svg";
import Btn from "../btn";

export default function Nav() {
  return (
    <div className={styles.container}>
      <Image src={Logo} alt="logo" height={42}/>
      <Btn className={styles.btn} small >Discover the app</Btn>
    </div>
  )
}
