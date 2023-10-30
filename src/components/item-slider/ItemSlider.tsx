import Image from "next/image";
import styles from "./itemSlider.module.scss";
import BookImage from '@/assets/banner/book_1.svg'
import BookItem from "@/components/book-item/BookItem";

type Props = {
  image: string;
  title: string;
  writer: string;
  price: string;
};
export default function ItemSlider(props: any) {
  return (
    <div className={styles.main}>
        <BookItem image={BookImage} title="No More Police" writer="Andrea Ritchie" price="17.66"/>
    </div>
  );
}
