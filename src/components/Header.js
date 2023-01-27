import React from 'react'
import styles from '../css/header.module.css'

const Header = () => {
  return (
    <nav className={styles.header}>
        <div className={styles.topSection}>
            <h2 className={styles.text}>Demo Streaming</h2>
            <div className={styles.btnContainer}>
                <button className={styles.loginBtn}>Login</button>
                <button className={styles.trialBtn}>Start your free trial</button>
            </div>
        </div>
        <div className={styles.bottomSection}>
            <h3 className={styles.text}>Popular Movies</h3>
        </div>
    </nav>
  )
}

export default Header