import React from 'react'
import Accordion from '../../complexComponents/Accordion/Accordion'
import styles from './Contacts.module.css'


const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactsFAQs}>
        <Accordion/>
      </div>
      <div className={styles.contactsUs}>
        <form className={styles.contactForm}>
          <h1 className={styles.title}>Є що спитати?</h1>
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