"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "./slider.module.scss";
import EricBanner from "@/assets/banner/eric.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SliderNavigation from "@/assets/slider-navigation.svg";

const Sliders = [
  {
    id: 1,
    title: "Eric-Emanuel Schmitt",
    description:
      "Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.",
    banner: EricBanner,
    isStockAvailable: true,
    isAuthorOfTheMonth: true,
    secialOffer: "Autographed books + 30% discount",
  },
  {
    id: 2,
    title: "Eric-Emanuel Schmitt",
    description:
      "Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.",
    banner: EricBanner,
    isStockAvailable: true,
    isAuthorOfTheMonth: false,
  },
  {
    id: 3,
    title: "Eric-Emanuel Schmitt",
    description:
      "Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.",
    banner: EricBanner,
    isStockAvailable: true,
    isAuthorOfTheMonth: false,
  },
];

export default function HeroSlider() {
  const [currrentSlide, setCurrentSlide] = useState(0);
  const indicatorHeight =
    (315 - (72 / Sliders.length) * (Sliders.length - 1)) / Sliders.length;
  return (
    <div className={styles.slider}>
      <Carousel
        selectedItem={currrentSlide}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
      >
        {Sliders.map(
          ({
            banner,
            id,
            title,
            description,
            isAuthorOfTheMonth,
            secialOffer,
            isStockAvailable,
          }) => (
            <div key={id} className={styles.main}>
              <div className={styles.left}>
                {isAuthorOfTheMonth && (
                  <div className={styles.author}>Author of August</div>
                )}
                <h1>{title}</h1>
                <p>{description}</p>
                <Link href={`/${id}`}>View his boooks</Link>
              </div>
              <div className={styles.right}>
                {secialOffer && (
                  <div className={styles.specialOffer}> {secialOffer}</div>
                )}
                {isStockAvailable && (
                  <div className={styles.isStockAvailable}>
                    *within the stock limit
                  </div>
                )}
                <div className={styles.banner}>
                  <Image src={banner} alt={title} />
                </div>
              </div>
            </div>
          )
        )}
      </Carousel>
      <div className={styles.indicator}>
        {Sliders.map((element, index) => (
          <span
            style={{ height: indicatorHeight + "px" }}
            key={element.id}
            className={index === currrentSlide ? "active" : ""}
          />
        ))}
      </div>
      <div className={styles.navigation}>
        <button
          className=""
          onClick={() => setCurrentSlide(currrentSlide - 1)}
          disabled={currrentSlide <= 0}
        >
          <Image src={SliderNavigation} alt="prev" />
        </button>
        <button
          onClick={() => setCurrentSlide(currrentSlide + 1)}
          disabled={currrentSlide >= Sliders.length - 1}
        >
          <Image src={SliderNavigation} alt="next" />
        </button>
      </div>
    </div>
  );
}
