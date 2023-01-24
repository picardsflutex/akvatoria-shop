import React from 'react'
import styles from './Offers.module.css'
import MenuItem from '../../complexComponents/MenuItem/MenuItem'
import ProductCard from '../../complexComponents/ProductCard/ProductCard'

const Offers = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.offerMenu}>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
      <div className={styles.cardList}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  )
}

export default Offers