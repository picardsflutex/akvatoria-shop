import React from 'react'
import styles from './AdvLink.module.css'

const AdvLink = (props) => {
  return (
    <button className={styles.link}>
      {props.children}
    </button>
  )
}

export default AdvLink