import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import json from "../info.json"
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import Topbar from '../components/Topbar/Topbar'

export default function Home() {
  const handle = () => {
  }

  const [values, setValues] = useState(json);

  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>

          <h4 className={styles.cardHeading}>SCHOOL DETAILS</h4>
          {values.school.map(e => {
            return (
              <div className={styles.cardSection}>
                <div key={e.key}>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>MAJOR: </span>
                    <span>{e.major}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>NAME: </span>
                    <span>{e.Name}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>ATTENDED: </span>
                    <span>{e.From} to {e.To}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>PERCENTAGE / CGPA: </span>
                    <span>8.45</span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.cardSection}>
            <h4 className={styles.cardHeading}>COMPANY DETAILS</h4>
            <div>
              <div className={styles.cardSubheading}>
                <span className={styles.spanLeft}>POSITION: </span>
                <span>Systems Engineer</span>
              </div>
              <div className={styles.cardSubheading}>
                <span className={styles.spanLeft}>NAME: </span>
                <span>Company.In</span>
              </div>
              <div className={styles.cardSubheading}>
                <span className={styles.spanLeft}>WORKED: </span>
                <span>2019 to present</span>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>CERTIFICATES</h4>
          <div className={styles.cardSection}>
            <div className={styles.singleLine}>
              <p>Certificate 1</p>
            </div>
          </div>
          <div className={styles.cardSection}>
            <div className={styles.singleLine}>
              <p>Certificate 2</p>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>SKILLS</h4>
          <div className={styles.cardLeftRight}>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>HTML</p>
              </div>
            </div>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>CSS</p>
              </div>
            </div>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>React JS</p>
              </div>
            </div>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>Node JS</p>
              </div>
            </div>
          </div>
          <div className={styles.cardLeftRight}>

          </div>
        </div>


        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>INTERESTS</h4>
          <div className={styles.cardLeftRight}>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>Web</p>
              </div>
            </div>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>Networking</p>
              </div>
            </div>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>ML</p>
              </div>
            </div>
            <div className={styles.cardSection}>
              <div className={styles.singleTab}>
                <p>DL</p>
              </div>
            </div>
          </div>
          <div className={styles.cardLeftRight}>

          </div>
        </div>
        <Link href="/update">
          <Button className={styles.btn} variant='outlined' onClick={handle}>UPDATE</Button>
        </Link>
      </div>
    </div >
  )
}
