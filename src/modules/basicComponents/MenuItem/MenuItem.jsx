import React from 'react'
import styles from './MenuItem.module.css'
import icon from './favorite.png'

const MenuItem = (info) => {
  return (
    <div className={styles.menuItem}>
      <img className={styles.itemImg} src={icon} alt="" />
      <div className={styles.itemText}>Favorite</div>
    </div>
  )
}

export default MenuItem