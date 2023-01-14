import React from 'react'
import styles from './Header.module.css'
import avatar from './../../../images/main/avatar.png'
import more from './../../../images/main/arrow.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        TheMARBEL
      </div>
      <nav className={styles.navigation}>
				<div className={styles.navlink}>Головна</div>
				<div className={styles.navlink}>Каталог</div>
				<div className={styles.navlink}>Оплата та акції</div>
        <div className={styles.navlink}>Доставка</div>
				<div className={styles.navlink}>Про компанію</div>
			</nav>
			<div className={styles.account}>
				<img src={avatar} alt="Аватар" className={styles.avatar} />
				<div className={styles.nickname}>Користувач</div>
				<img src={more} alt="Больше" className={styles.more}/>
			</div>
    </div>
  )
}

export default Header