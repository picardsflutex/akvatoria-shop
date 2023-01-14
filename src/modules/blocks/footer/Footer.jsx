import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <nav className={styles.navigation}>
          <div className={styles.navlink}>Оплата та акції</div>
          <div className={styles.navlink}>Доставка</div>
          <div className={styles.navlink}>Про компанію</div>
        </nav>
        <div className={styles.info}>
          <a href="tel:+380999999999" className={styles.text}>Номер: +38(099) 999-99-99</a>
          <a href="tel:+380999999999" className={styles.text}>Номер: +38(099) 999-99-99</a>
          <a href="mailto:infoCentr@gmail.com" className={styles.text}>Поштова скринька: infoCentr@gmail.com</a>
        </div>
      </div>
      <div className={styles.license}>Ukraine, Zaporizhzhya. Developed by PicardsFlutex 2023.</div>
    </div>
  )
}

export default Footer