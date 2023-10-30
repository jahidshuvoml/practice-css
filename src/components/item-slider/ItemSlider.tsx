import Image from "next/image";
import styles from "./itemSlider.module.scss";
import BookImage from "@/assets/banner/book_1.svg";
import BookItem from "@/components/book-item/BookItem";
import SliderNavigation from "@/assets/slider-navigation.svg";
interface Props extends Partial<HTMLDivElement> {
  title: string;
}

export default function ItemSlider({ title, className }: Props) {
  return (
    <div className={styles.main + ` ${className}`}>
      <h1>{title}</h1>
      <div className={styles.container}>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <BookItem
              key={index}
              image={BookImage}
              title="No More Police"
              writer="Andrea Ritchie"
              price="17.66"
            />
          ))}
      </div>
      <div className={styles.pagination}>
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <span key={index}></span>
          ))}
      </div>
      <div className={styles.navigation}>
        <button disabled={true}>
          <Image src={SliderNavigation} alt="prev" />
        </button>
        <button>
          <Image src={SliderNavigation} alt="next" />
        </button>
      </div>
    </div>
  );
}
