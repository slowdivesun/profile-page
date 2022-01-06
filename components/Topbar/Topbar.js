import { useContext } from "react"
import { Context } from "../../context/Context"
import styles from "./Topbar.module.css"

export default function Topbar() {
    const { info } = useContext(Context);
    return (
        <div className={styles.topContainer}>
            <span className={styles.logo}>Info.In</span>
            <div className={styles.profile}>
                <span><img className={styles.pfp} src="/pf.png" /></span>
                <div>
                    <p>{info.name}</p>
                    <p>{info.email}</p>
                    <p>{info.mobile}</p>
                </div>
            </div>
        </div>
    )
}
