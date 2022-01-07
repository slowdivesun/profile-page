import styles from '../styles/Update.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

export default function Update() {
    const { dispatch } = useContext(Context);

    const [school, setSchool] = useState({});
    const [company, setCompany] = useState({});
    const [certificates, setCertificates] = useState([]);
    const [skills, setSkills] = useState([]);
    const [interests, setInterests] = useState([]);

    const handleSchool = (e) => {
        e.preventDefault();
        setSchool(school);
        dispatch({
            type: "ADD_SCHOOL",
            payload: {
                school
            }
        })
        e.target.reset();
    }

    const handleCompany = (e) => {
        e.preventDefault();
        setCompany(company);
        dispatch({
            type: "ADD_COMPANY",
            payload: {
                company
            }
        })
        e.target.reset();
    }

    const handleCertificate = (e) => {
        e.preventDefault();
        setCertificates(certificates);
        dispatch({
            type: "ADD_CERTIFICATE",
            payload: {
                certificates
            }
        })
        e.target.reset();
    }

    const handleSkills = (e) => {
        e.preventDefault();
        setSkills(skills);
        dispatch({
            type: "ADD_SKILLS",
            payload: {
                skills
            }
        })
        console.log(skills)
        e.target.reset();
    }

    const handleInterests = (e) => {
        e.preventDefault();
        setSkills(interests);
        dispatch({
            type: "ADD_INTERESTS",
            payload: {
                interests
            }
        })
        e.target.reset();
    }

    return (
        <div className={styles.updateWrapper}>
            <div className={styles.updateContainer}>
                <div className={styles.form}>
                    <p className={styles.heading}>SCHOOL DETAILS</p>
                    <form onSubmit={handleSchool}>
                        <div>
                            <div className={styles.subsection}>
                                <div>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="School Name" onChange={e => { setSchool(school => ({ ...school, "name": e.target.value })) }}></TextField>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="Specialization" onChange={e => { setSchool(school => ({ ...school, "major": e.target.value })) }}></TextField>
                                </div>
                            </div>

                            <div className={styles.subsection}>
                                <div className={styles.smallContainer}>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField + " " + styles.smallBox + " " + styles.startDate} label="From" onChange={e => { setSchool(school => ({ ...school, "from": e.target.value })) }}></TextField>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField + " " + styles.smallBox} label="To" onChange={e => { setSchool(school => ({ ...school, "to": e.target.value })) }}></TextField>
                                </div>
                                <Button variant='outlined' type='submit'>ADD</Button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>COMPANY DETAILS</p>
                    <form onSubmit={handleCompany}>
                        <div>
                            <div className={styles.subsection}>
                                {/* <p>Details</p> */}
                                <div>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="Name" onChange={e => { setCompany(company => ({ ...company, "name": e.target.value })) }}></TextField>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="Position" onChange={e => { setCompany(company => ({ ...company, "position": e.target.value })) }}></TextField>
                                </div>
                            </div>
                            <div className={styles.subsection}>
                                {/* <p>Attended</p> */}
                                <div className={styles.smallContainer}>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField + " " + styles.smallBox + " " + styles.startDate} label="Worked From" onChange={e => { setCompany(company => ({ ...company, "from": e.target.value })) }}></TextField>
                                    <TextField sx={{"marginBottom":"5px"}} className={styles.textField + " " + styles.smallBox} label="To" onChange={e => { setCompany(company => ({ ...company, "to": e.target.value })) }}></TextField>
                                </div>
                                <Button variant='outlined' type="submit">ADD</Button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>CERTIFICATION</p>
                    <form onSubmit={handleCertificate}>
                        <div className={styles.subsection}>
                            <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="Enter Certification" onChange={e => { setCertificates(certificates => (e.target.value)) }}></TextField>
                            <Button variant='outlined' className={styles.button} type="submit">ADD</Button>
                        </div>
                    </form>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>SKILLS</p>
                    <form onSubmit={handleSkills}>
                        <div className={styles.subsection}>
                            <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="Enter Skills" onChange={e => { setSkills((e.target.value)) }}></TextField>
                            <Button variant='outlined' className={styles.button} type='submit'>ADD</Button>
                        </div>
                    </form>
                </div>

                <div className={styles.form}>
                    <p className={styles.heading}>INTERESTS</p>
                    <form onSubmit={handleInterests}>
                        <div className={styles.subsection}>
                            <TextField sx={{"marginBottom":"5px"}} className={styles.textField} label="Enter Interests" onChange={e => { setInterests((e.target.value)) }}></TextField>
                            <Button variant='outlined' className={styles.button} type="submit">ADD</Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
