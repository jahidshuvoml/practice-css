import Image from "next/image";
import DefaultImage from "@/assets/cart.svg";
import styles from "./icon-with-number.module.scss";

export default function IconWithNumber({
  image = DefaultImage,
  alt = "menu",
  count,
}: {
  image: string;
  alt: string;
  count?: number;
}) {
    
  return (
    <div className={styles.main}>
      <Image src={image} alt={alt} />
      {count && (count > 9 ? <span>9+</span> : <span>{count}</span>)}
    </div>
  );
}
