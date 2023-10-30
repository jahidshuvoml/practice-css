import Image from "next/image";
import styles from "./footer.module.scss";
import FbIcon from "@/assets/fb.svg";
import PaypalIcon from "@/assets/paypal.svg";
import BrandLogo from "@/assets/brand-logo2.svg";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.menus}>
        <div className={styles.logo}>
            <Image src={BrandLogo} alt="" />
        </div>
        <div className={styles.categories}>
          <ul>
            Categories
            <li>Psychology</li>
            <li>Self-Help</li>
            <li>Romance</li>
            <li>Mystery</li>
          </ul>
        </div>
        <div className={styles.kids}>
          <ul>
            For Kids
            <li>Psychology</li>
            <li>Self-Help</li>
            <li>Romance</li>
            <li>Mystery</li>
          </ul>
        </div>
        <div className={styles.ebooks}>
          <ul>
            E-books
            <li>Fiction</li>
            <li>Historical</li>
            <li>Horror</li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <ul>
            Help & Contacts
            <li>+445 87 999 000</li>
            <li>Mo-Fri, 9 AM - 11 PM</li>
            <li>b.world@store.ro</li>
          </ul>
        </div>
        <div className={styles.call}>
          <p>
            If you have questions, you can contact us or we will do it for you.{" "}
          </p>
          <button>Request a call</button>
        </div>
        <div className={styles.social}>
          <Image src={FbIcon} alt="" />
          <Image src={FbIcon} alt="" />
          <Image src={FbIcon} alt="" />
        </div>
        <div className={styles.bank}>
          <Image src={PaypalIcon} alt="" />
          <Image src={PaypalIcon} alt="" />
          <Image src={PaypalIcon} alt="" />
        </div>
      </div>
      <div className={styles.copyright}>
        © All copyrights are reserved. B-World 2022.
      </div>
    </footer>
  );
}
