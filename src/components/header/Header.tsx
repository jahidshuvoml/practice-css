import Image from "next/image";
import styles from "./header.module.scss";
import BrandLogo from "@/assets/brand-logo.svg";
import SearchIcon from "@/assets/search-icon.svg";
import VerticalLine from "../vertical-line/VerticalLine";
import Link from "next/link";
import IconWithNumber from "../icon-with-number/IconWithNumber";
import CartIcon from "@/assets/cart.svg";
import FavouriteIcon from "@/assets/favourites.svg";
import UserIcon from "@/assets/user-icon.svg";
import PhoneIcon from "@/assets/phone.svg";
import HamburgerMenu from "@/assets/hamburger-menu.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <hr />
      <hr />
      <div className={styles.upper}>
        <div className={styles.logo}>
          <Image src={BrandLogo} alt="B-World" />
          <VerticalLine height={30} />
          <p>
            We love <br />
            books
          </p>
        </div>
        <div className={styles.searchBar}>
          <input placeholder="Type any book here" type="text" />
          <Image src={SearchIcon} alt="search" />
        </div>
        <ul className={styles.menuItem}>
          <li>
            <Link href="privacy-policy" />
            Privacy Policy
          </li>
          <li>
            <Link href="Warranty" />
            Warranty
          </li>
          <li>
            <Link href="shipping" />
            Shipping
          </li>
          <li>
            <Link href="return" />
            Return
          </li>
        </ul>
        <div className={styles.number + " phoneNumber"}>
          <Image src={PhoneIcon} alt="phone" />
          +445 87 999 000
        </div>
        <div className={styles.menuLogo}>
          <IconWithNumber image={CartIcon} alt="cart" />
          <VerticalLine height={20} />
          <IconWithNumber image={FavouriteIcon} alt="favourites" count={3} />
          <VerticalLine height={20} />
          <IconWithNumber image={UserIcon} alt="user" />
        </div>
        <button className={styles.hamburgerMenu}>
          <Image src={HamburgerMenu} alt="menu" />
        </button>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.rightMenu}>
          <li>
            <Link href="must-read" />
            The must read
          </li>
          <li>
            <Link href="news" />
            News
          </li>
          <li>
            <Link href="promotion" />
            Promotion of the mount
          </li>
          <li>
            <Link href="ublish" />
            Publish
          </li>
          <li>
            <Link href="subscribe" />
            Subscribe to the news letter
          </li>
        </ul>
        <div className={styles.phone}>
          <div className={styles.number}>
            <Image src={PhoneIcon} alt="phone" />
            +445 87 999 000
          </div>
          <div className={styles.requestCall}>Request a call</div>
        </div>
      </div>
    </div>
  );
}
