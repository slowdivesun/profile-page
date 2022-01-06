import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import json from "../info.json"
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useContext, useEffect, useState } from 'react'
import Topbar from '../components/Topbar/Topbar'
import { Context } from '../context/Context'

export default function Home() {
  const handle = () => {
  }
  const { dispatch, school, company, certificates, skills, interests } = useContext(Context)
  const [values, setValues] = useState(json);

  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>SCHOOL DETAILS</h4>
          {school.map(e => {
            return (
              <div className={styles.cardSection}>
                <div key={e.key}>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>MAJOR: </span>
                    <span>{e.major}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>NAME: </span>
                    <span>{e.name}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>ATTENDED: </span>
                    <span>{e.from} to {e.to}</span>
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
          <h4 className={styles.cardHeading}>COMPANY DETAILS</h4>
          {company.map(e => {
            return (
              <div>
                <div className={styles.cardSection}>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>POSITION: </span>
                    <span>{e.position}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>NAME: </span>
                    <span>{e.name}</span>
                  </div>
                  <div className={styles.cardSubheading}>
                    <span className={styles.spanLeft}>WORKED: </span>
                    <span>{e.from} to {e.to}</span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>


        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>CERTIFICATES</h4>
          {certificates.map(e => {
            return (
              <div className={styles.cardSection}>
                <div className={styles.singleLine}>
                  <p>{e}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>SKILLS</h4>
          <div className={styles.cardLeftRight}>
            {skills.map(e => {
              return (
                <div className={styles.cardSection}>
                  <div className={styles.singleTab}>
                    <p>{e}</p>
                  </div>
                </div>)
            })}
          </div>
          <div className={styles.cardLeftRight}>

          </div>
        </div>


        <div className={styles.cardWrapper}>
          <h4 className={styles.cardHeading}>INTERESTS</h4>
          <div className={styles.cardLeftRight}>
            {interests.map(e => {
              return (
                <div className={styles.cardSection}>
                  <div className={styles.singleTab}>
                    <p>{e}</p>
                  </div>
                </div>
              )
            })}
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
