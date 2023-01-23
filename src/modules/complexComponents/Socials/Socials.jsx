import React from 'react'
import styles from './Socials.module.css'
import twitter from './twitter.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import telephone from './phone.png'
import mail from './mail.png'

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a href="http://localhost:3000" className={styles.ref}>
        <img className={styles.socialImg} src={twitter} alt="" />
      </a>
      <a href="http://localhost:3000" className={styles.ref}>
        <img className={styles.socialImg} src={facebook} alt="" />
      </a>
      <a href="http://localhost:3000" className={styles.ref}>
        <img className={styles.socialImg} src={instagram} alt="" />
      </a>
      <a href="tel:+380999999999" className={styles.ref}>
        <img className={styles.socialImg} src={telephone} alt="" />
      </a>
      <a href="mailto:infoCentr@gmail.com" className={styles.ref}>
        <img className={styles.socialImg} src={mail} alt="" />
      </a>
    </div>
  )
}

export default Socials