import styles from "./Topbar.module.css"

export default function Topbar() {
    return (
        <div className={styles.topContainer}>
            <span className={styles.logo}>Info.In</span>
            <span><img className={styles.pfp} src="/pf.png" /></span>
        </div>
    )
}
