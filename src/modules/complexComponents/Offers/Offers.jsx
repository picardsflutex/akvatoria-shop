import React from 'react'
import styles from './Offers.module.css'
import MenuItem from '../../basicComponents/MenuItem/MenuItem'
import ProductCard from '../../basicComponents/ProductCard/ProductCard'

const Offers = () => {
  return (
    <div className={styles.offer}>
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
    </div>
  )
}

export default Offers