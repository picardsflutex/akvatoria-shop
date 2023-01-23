import React from 'react'
import styles from './ProductCard.module.css'
import cardImg from './ProductCard.png'

const ProductCard = () => {
  return (
    <div className={styles.productСard}>
      <img className={styles.cardImg} src={cardImg} alt="img1" />
      <div className={styles.cardTitle}>Lorem ipsum</div>
      <div className={styles.cardText}>Lorem ipsum dolor sit amet consectetur.</div>
      <div className={styles.cardMenu}>
        <button className={styles.cardButton}>Buy</button>
        <div className={styles.discountPrice}>
          <div className={styles.mainPrice}>1799 $</div>
          <div className={styles.discountPrice}>999 $</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 