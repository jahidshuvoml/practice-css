import Image from "next/image";
import styles from "./knowSection.module.scss";
import Map from "@/assets/Mapsicle Map.svg";

export default function KnowSection() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Did you know us? </h1>
        <p>
          We are about books and our purpose is to show you the book who can
          chage your life or distract you from the real world în a better one.
          BWorld works with the must popular publishs just for your delight. If
          you are about books, you must to subscribe to our newsletter.{" "}
        </p>
        <input placeholder="Your name "/>
        <input placeholder="Your e-mail "/>
        <button>Subscribe</button>
      </div>
      <div className={styles.right}>
        <Image src={Map} alt="" />
      </div>
    </div>
  );
}
