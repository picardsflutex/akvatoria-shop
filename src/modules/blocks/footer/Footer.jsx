import React from 'react'
import styles from './Footer.module.css'
import Socials from '../../complexComponents/Socials/Socials'
import Logo from '../../basicComponents/Logo/Logo'
import AdvButton from '../../basicComponents/AdvButton/AdvButton'
import AdvLink from '../../basicComponents/AdvLink/AdvLink'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <div className={styles.footerInfo}>
          <Logo/>
          <Socials/>
          <AdvButton>ContactUs</AdvButton>
        </div>
        <nav className={styles.footerNav}>
          <AdvLink>Працювати разом</AdvLink>
          <AdvLink>Вакансії</AdvLink>
          <AdvLink>Оплата та акції</AdvLink>
          <AdvLink>Доставка</AdvLink>
          <AdvLink>Про компанію</AdvLink>          
          <AdvLink>Вказати на помилку</AdvLink>
        </nav>
      </div>
      <div className={styles.license}>
        <div className={styles.rights}>
          ©2023 TheMarbel, Inc. - All Rights Reserved
        </div>
        <div className={styles.licenseLinks}>
          <AdvLink>Умови користування</AdvLink>
          <AdvLink>Конфіденційність</AdvLink>
        </div>
      </div>
    </div>
  )
}

export default Footer