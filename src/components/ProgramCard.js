import React from 'react'
import styles from '../css/programcard.module.css'

const ProgramCard = ({imgurl,title, releaseYear}) => {
  return (
    <div className={styles.cardConatiner} style={{ backgroundImage: `url(${imgurl})` }}>
      <div className={styles.titleContainer}>
        <div className={styles.leftSide}>
          <span className={styles.title}>{title}</span>
          <span className={styles.year}>Release year :{releaseYear}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard