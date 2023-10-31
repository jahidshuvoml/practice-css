import HeroSlider from '@/components/hero-slider/Slider'
import styles from './page.module.scss'
import ItemSlider from '@/components/item-slider/ItemSlider'
import KnowSection from '@/components/know-section/KnowSection'
import Benefits from '@/components/beneits/benefits'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlider />
      <Benefits className='section-margin'/>
      <ItemSlider title='Selected for you' className="section-margin"/>
      <ItemSlider title='You must buy it now ' className="section-margin"/>
      <KnowSection  className="section-margin"/>
    </main>
  )
}
