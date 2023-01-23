import React from 'react'
import styles from './AdvButton.module.css'

const AdvButton = (props) => {
  return (
    <button className={styles.button}>
      {props.children}
    </button>
  )
}

export default AdvButton