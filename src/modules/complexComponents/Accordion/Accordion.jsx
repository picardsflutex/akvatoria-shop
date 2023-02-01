import React from 'react'
import { useState } from 'react'
import styles from './Accordion.module.css'

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) =>{
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i)
  }

  return (
    <div className={styles.Accordion}>
      {data.map((item, i) => (
        <div className={styles.AccordionItem}>
          <div className={styles.AccordionTitle} onClick={() => toggle(i)}> 
            <h3>{item.question}</h3>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ? styles.AccordionText_show : styles.AccordionText}>{item.answer}</div>
        </div>
      ))}
    </div>
  )
}

const data = [
  {
    question: 'Question 1: , ipsum dolor ?',
    answer: '1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam assumenda quas? Soluta quidem nobis dignissimos exercitationem ad suscipit cumque labore vitae dolore consectetur harum voluptatibus eveniet facere, illum quos?'
  },
  {
    question: 'Question 2: , ipsum dolor ?',
    answer: '2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam assumenda quas? Soluta quidem nobis dignissimos exercitationem ad suscipit cumque labore vitae dolore consectetur harum voluptatibus eveniet facere, illum quos?'
  },
  {
    question: 'Question 3: , ipsum dolor ?',
    answer: '3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam assumenda quas? Soluta quidem nobis dignissimos exercitationem ad suscipit cumque labore vitae dolore consectetur harum voluptatibus eveniet facere, illum quos?'
  }
]

export default Accordion