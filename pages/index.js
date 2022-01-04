import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header text="School Info" />
      <Header text="Company Info" />
      <Header text="Certificates" />
      <Header text="Skills" />
      <Header text="Interests" /> */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardSection}>
            <h4 className={styles.cardHeading}>SCHOOL DETAILS</h4>
            <div>
              <div className={styles.cardSubheading}>
                <span className={styles.spanLeft}>MAJOR: </span>
                <span>Computer Science and Engineering</span>
              </div>
              <div className={styles.cardSubheading}>
                <span>Name: </span>
                <span>Indian Institute of Technology, Jodhpur</span>
              </div>
              <div className={styles.cardSubheading}>
                <span>Attended: </span>
                <span>2019 to 2023</span>
              </div>
              <div className={styles.cardSubheading}>
                <span>Percentage/CGPA: </span>
                <span>8.45</span>
              </div>
            </div>
          </div>
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
                <span>Name: </span>
                <span>Company.In</span>
              </div>
              <div className={styles.cardSubheading}>
                <span>Worked: </span>
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

        <Button>UPDATE</Button>
      </div>
    </div>
  )
}
