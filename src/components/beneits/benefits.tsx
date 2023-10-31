import styles from "./benefits.module.scss";
import Image from "next/image";
import ShippinIcon from "@/assets/shipping.svg";
import StarIcon from "@/assets/star.svg";
import BookOpen from "@/assets/book-open.svg";
import VerticalLine from "../vertical-line/VerticalLine";

export default function Benefits({ className }: Partial<HTMLDivElement>) {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.item}>
        <Image src={ShippinIcon} alt="" height={40} width={40} />
        <p>Free shiping over 50$</p>
      </div>
      <VerticalLine height={80} className="vertical-line" />
      <div className={styles.item}>
        <Image src={StarIcon} alt="" height={40} width={40} />
        <p>Save with loyalty points</p>
      </div>
      <VerticalLine height={80} className="vertical-line" />
      <div className={styles.item}>
        <Image src={BookOpen} alt="" height={40} width={40} />
        <p>Read a few pages </p>
      </div>
    </div>
  );
}
