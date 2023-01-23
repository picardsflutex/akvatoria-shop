import React from 'react'
import styles from './MainPage.module.css'
import Offers from '../../complexComponents/Offers/Offers'

const MainPage = () => {
  return (
    <main className={styles.main}>
      <Offers/>
    </main>
  )
}

export default MainPage