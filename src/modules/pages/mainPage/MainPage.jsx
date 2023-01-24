import React from 'react'
import styles from './MainPage.module.css'
import Offers from '../../blocks/Offers/Offers'
import Contacts from '../../blocks/Contacts/Contacts'
import WorkWith from '../../blocks/WorkWith/WorkWith'

const MainPage = () => {
  return (
    <main className={styles.main}>
      <WorkWith/>
      <Offers/>
      <Contacts/>
    </main>
  )
}

export default MainPage