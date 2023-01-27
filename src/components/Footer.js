import React from 'react'
import styles from '../css/footer.module.css'
import facebook from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import instagram from '../assets/social/instagram-white.svg'
import playstore from '../assets/store/play-store.svg'
import appStore from '../assets/store/app-store.svg'
import windowsStore from '../assets/store/windows-store.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        {/* <nav> */}
          <ul className={styles.content}>
            <li className={styles.list}>Home</li>
            <li className={styles.list}>Terms and Conditions</li>
            <li className={styles.list}>Privacy Policy</li>
            <li className={styles.list}>Collection Statement</li>
            <li className={styles.list}>Help</li>
            <li>Manage Acount</li>
          </ul>
        {/* </nav> */}
        <h6 className={styles.copyright}>Copyright 2016 &copy; DEMO streaming All rights reserved</h6>
      <div className={styles.contact}>
        <div className={styles.socialMedias}>
          <img className={styles.socialIcons} alt='facebook' src = {facebook} />
          <img className={styles.socialIcons} alt='twitter' src = {twitter} />
          <img className={styles.socialIcons} alt='instgram' src = {instagram} />
        </div>
        <div className={styles.playstores}>
          <img className={styles.playstoreIcon} alt='playstore' src= {playstore}/>
          <img className={styles.playstoreIcon} alt='appstore' src= {appStore}/>
          <img className={styles.playstoreIcon} alt='windowstore' src= {windowsStore}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer