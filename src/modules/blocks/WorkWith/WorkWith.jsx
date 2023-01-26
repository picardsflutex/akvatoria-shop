import React from 'react'
import styles from './WorkWith.module.css'
import companyLogo from './Company logo.png'

const WorkWith = () => {
  return (
    <section className={styles.workWith}>
      <h1 className={styles.title}>Ми співпрацюємо з ними</h1>
      <p className={styles.text}>,тож долучайся до нас, зробимо світ зручнішим.</p>
      <div className={styles.companiesList}>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
        <div className={styles.companiesCard}>
          <img className={styles.companyLogo} src={companyLogo} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default WorkWith