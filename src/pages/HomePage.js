import React from 'react'
import card from '../assets/placeholder.png'
import styles from '../css/hompage.module.css'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const history = useNavigate()
  const contentType = ['SERIES','MOVIES']
  const hanldeRoute = (data) => {
    history(`/${data.toLowerCase()}`)
  }
  return (
    <div className={styles.container}>
      {
        contentType.map(data => (
          <div className={styles.cardContainer} key={data}>
            <img src={card} className={styles.card} alt='type' onClick={()=>hanldeRoute(data)} />
            <h2 className={styles.contentTypeTitle}>{data}</h2>
            <h4>Popular {data.toLowerCase()}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage