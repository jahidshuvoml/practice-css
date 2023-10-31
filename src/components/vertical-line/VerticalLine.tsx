import styles from "./vertical-line.module.scss";


interface Props extends Partial<HTMLDivElement>{
  height:number
}

export default function VerticalLine({ height = 20, className }: Props) {
  return <div style={{ height: `${height}px` }} className={`${styles.main} ${className}`}></div>;
}
