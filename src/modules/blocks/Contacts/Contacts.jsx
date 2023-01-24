import React from 'react'
import styles from './Contacts.module.css'


const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactsFAQs}>
        <div className={styles.FAQsCard}>
          <div className={styles.cardTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur eum obcaecati earum hic deleniti!</div>
        </div>
        <div className={styles.FAQsCard}>
          <div className={styles.cardTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur eum obcaecati earum hic deleniti!</div>
        </div>
        <div className={styles.FAQsCard}>
          <div className={styles.cardTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur eum obcaecati earum hic deleniti!</div>
        </div>
      </div>
      <div className={styles.contactsUs}>
        <form className={styles.contactForm}>
          <h2 className={styles.title}>Є що спитати?</h2>
          <p className={styles.text}>Відсилай нам своє запитання, якщо не знайшов на нього відповідь тут!</p>
          <input type="text" className={styles.input}/>
          <input type="text" className={styles.input}/>
          <button className={styles.submit}>Відправити</button>
        </form>
        <button className={styles.button}>Залишились питання?</button>
      </div>
    </section>
  )
}

export default Contacts