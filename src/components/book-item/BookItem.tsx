"use client";
import Image from "next/image";
import styles from "./bookItem.module.scss";
import CartIcon from "@/components/icon/cart/CartIcon";
import FabouritesIcon from "../icon/fabourites/Fabourites";
import { useState } from "react";

type Props = {
  image: string;
  title: string;
  writer: string;
  price: string;
};
export default function BookItem(props: Props) {
  const [isFabourites, setIsFabourites] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image src={props.image} alt={props.title} />
      </div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.writer}>{props.writer}</p>
      <div className={styles.price}>
        <p>${props.price}</p>
        <div onClick={() => setIsFabourites(!isFabourites)}>
          <FabouritesIcon {...(isFabourites ? { variant: "none" } : "")} />
        </div>
      </div>
      <button className={styles.cart}>
        <CartIcon variant="white" />
        Add to cart
      </button>
    </div>
  );
}
