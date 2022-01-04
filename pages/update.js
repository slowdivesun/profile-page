import styles from '../styles/Update.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import React, { useState } from 'react'

export default function Update() {
    return (
        <div className={styles.updateWrapper}>
            <div className={styles.updateContainer}>
                <div className={styles.form}>
                    <p className={styles.heading}>SCHOOL DETAILS</p>
                    <div>
                        <div className={styles.subsection}>
                            <div>
                                <TextField className={styles.textField} label="School Name"></TextField>
                                <TextField className={styles.textField} label="Specialization"></TextField>
                            </div>
                        </div>
                        <div className={styles.subsection}>
                            <div className={styles.smallContainer}>
                                <TextField className={styles.textField + " " + styles.smallBox + " " + styles.startDate} label="From"></TextField>
                                <TextField className={styles.textField + " " + styles.smallBox} label="To"></TextField>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>COMPANY DETAILS</p>
                    <div>
                        <div className={styles.subsection}>
                            {/* <p>Details</p> */}
                            <div>
                                <TextField className={styles.textField} label="Name"></TextField>
                                <TextField className={styles.textField} label="Position"></TextField>
                            </div>
                        </div>
                        <div className={styles.subsection}>
                            {/* <p>Attended</p> */}
                            <div className={styles.smallContainer}>
                                <TextField className={styles.textField + " " + styles.smallBox + " " + styles.startDate} label="Worked From"></TextField>
                                <TextField className={styles.textField + " " + styles.smallBox} label="To"></TextField>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>SKILLS</p>
                    <div className={styles.subsection}>
                        <TextField className={styles.textField} label="Enter Certification"></TextField>
                        <Button variant='outlined' className={styles.button}>ADD</Button>
                    </div>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>INTERESTS</p>
                    <div className={styles.subsection}>
                        <TextField className={styles.textField} label="Enter Certification"></TextField>
                        <Button variant='outlined'>ADD</Button>
                    </div>
                </div>
            </div >
        </div>
    )
}
