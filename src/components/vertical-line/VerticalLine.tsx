import styles from "./vertical-line.module.scss";

export default function VerticalLine({ height = 20 }) {
  return <div style={{ height: `${height}px` }} className={styles.main}></div>;
}
