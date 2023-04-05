import styles from "./style.module.css";

interface Props {
  small?: boolean;
  className?: string;
  children: string;
}

export default function Btn({ children, className, small }: Props) {
  return (
    <div className={`${styles.container} ${small ? styles.small : ""} ${className}`}>{ children }</div>
  )
}
