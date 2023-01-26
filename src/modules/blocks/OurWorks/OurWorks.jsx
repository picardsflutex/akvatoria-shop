import React from 'react'
import AdvButton from '../../basicComponents/AdvButton/AdvButton'
import styles from './OurWorks.module.css'
import cardImg from './ProductCard.png'

const OurWorks = () => {
  return (
    <section className={styles.OurWorks}>
      <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores repellat quo accusamus explicabo rem praesentium asperiores, doloribus exercitationem blanditiis enim illo odio magnam incidunt animi quam debitis, optio totam?</p>
      <div className={styles.WorksList}>
        <div className={styles.WorksCard}>
          <img className={styles.CardImg} src={cardImg} alt="" />
          <p className={styles.title}>Lorem, ipsum.</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.WorksCard}>
          <img className={styles.CardImg} src={cardImg} alt="" />
          <p className={styles.title}>Lorem, ipsum.</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.WorksCard}>
          <img className={styles.CardImg} src={cardImg} alt="" />
          <p className={styles.title}>Lorem, ipsum.</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <AdvButton>Більше...</AdvButton>
    </section>
  )
}

export default OurWorks