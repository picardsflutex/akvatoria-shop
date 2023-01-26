import React from 'react'
import styles from './MainPage.module.css'
import Offers from '../../blocks/Offers/Offers'
import Contacts from '../../blocks/Contacts/Contacts'
import WorkWith from '../../blocks/WorkWith/WorkWith'
import HowItWork from '../../blocks/Statistic/Statistic'
import OurWorks from '../../blocks/OurWorks/OurWorks'

const MainPage = () => {
  return (
    <main className={styles.main}>
      <OurWorks/>
      <HowItWork/>
      <WorkWith/>
      <Offers/>
      <Contacts/>
    </main>
  )
}

export default MainPage