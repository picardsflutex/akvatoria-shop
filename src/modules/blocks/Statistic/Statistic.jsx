import React from 'react'
import styles from './Statistic.module.css'

const HowItWork = () => {
  return (
    <section className={styles.howItWork}>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <div className={styles.statsNumber}>3200+</div>
          <div className={styles.statsDescription}>Постійних клєнтів</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsNumber}>24</div>
          <div className={styles.statsDescription}>Компанії-партнери</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsNumber}>150</div>
          <div className={styles.statsDescription}>Різноманітних товарів</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsNumber}>4.84</div>
          <div className={styles.statsDescription}>Середня оцінка</div>
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores repellat quo accusamus explicabo rem praesentium asperiores, doloribus exercitationem blanditiis enim illo odio magnam incidunt animi quam debitis, optio totam?</p>
      </div>
    </section>
  )
}

export default HowItWork