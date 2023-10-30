import HeroSlider from '@/components/hero-slider/Slider'
import styles from './page.module.scss'
import ItemSlider from '@/components/item-slider/ItemSlider'
import Footer from '@/components/footer/Footer'
import KnowSection from '@/components/know-section/KnowSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlider />
      <ItemSlider />
      <KnowSection />
      <Footer />
    </main>
  )
}
